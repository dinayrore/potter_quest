#
class DocumentsController < ApplicationController
  before_action :set_document, only: [:show, :edit, :update]

  def index
    @documents = Document.all
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
        format.html { redirect_to documents_path }
      else
        format.html { render action: 'new' }
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
