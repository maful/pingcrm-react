class OrganizationsController < ApplicationController
  def index
    organizations = Organization.order(:name)

    render inertia: "Organizations/Index", props: {
      organizations: organizations
    }
  end
end
