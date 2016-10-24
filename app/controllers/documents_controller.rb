#
class DocumentsController < ApplicationController
  before_action :set_document, only: [:show]

  def index
    @documents = Document.all
    respond_to do |f|
      f.html # index.html.erb
      f.xml  { render xml: @users}
      f.json { render json: @users}
    end
  end

  def show
    send_data(@document.file_contents,
              type: @document.content_type,
              filename: @document.filename)
  end

  def new
    @document = Document.new
  end

  def create
    @document = Document.new(document_params)

    respond_to do |format|
      if @document.save
        format.html { redirect_to documents_path, notice: 'Document was successfully created.' }
        format.json { render action: 'show', status: :created, location: @document }
      else
        format.html { render action: 'new' }
        format.json { render json: @document.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_document
    @document = Document.find(params[:id])
  end

  # Only allow the white list through.
  def document_params
    params.require(:document).permit(:file)
  end
end
