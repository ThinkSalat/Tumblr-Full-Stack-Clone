class Post < ApplicationRecord
  #  VALIDATIONS
  validates :post_type, presence: :true
  
  # ASSOCIATIONS
  belongs_to :user
  has_many_attached :images, dependent: :purge_later
  has_many :likes
  has_many :users_who_like_post,
    through: :likes,
    source: :user
    
  # notes
  # has_many :tags
  # has_many :notes
  # has_many :comments
  # has_many :reblogs
  
  # METHODS

  # post's state is unpublished until user hits submit, but is created once an image is uploaded
  # if they submit, it's published.
end
