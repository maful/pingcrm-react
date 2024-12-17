class User < ApplicationRecord
  belongs_to :account

  devise :database_authenticatable, :rememberable

  validates :first_name, :last_name, :email, presence: true
  validates :email, uniqueness: true

  def name
    "#{last_name}, #{first_name}"
  end

  # ensure user account is active
  def active_for_authentication?
    super && !deleted_at
  end

  # provide a custom message for a deleted account
  def inactive_message
    deleted_at ? :deleted : super
  end

  def demo?
    email == "johndoe@example.com"
  end
end
