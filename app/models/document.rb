#
class Document < ActiveRecord::Base
  validate :file_size_under_one_mb

  def initialize(params = {})
    @file = params.delete(:file)
    super
    if @file
      self.filename = sanitize_filename(@file.original_filename)
      self.content_type = @file.content_type
      self.file_contents = @file.read
    end
  end

  private

  def sanitize_filename(filename)
    File.basename(filename)
  end

  NUM_BYTES_IN_MEGABYTE = 1_048_576
  def file_size_under_one_mb
    errors.add(:file, 'File size cannot be over one megabyte.') if
    (@file.size.to_f / NUM_BYTES_IN_MEGABYTE) > 1
  end
end
