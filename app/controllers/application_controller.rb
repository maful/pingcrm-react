class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  include Auth
  include InertiaFlash

  inertia_share auth: -> {
    {
      user: current_user.as_json(
        only: [ :id, :first_name, :last_name ],
        include: {
          account: {
            only: [ :id, :name ]
          }
        }
      )
    }
  }
end
