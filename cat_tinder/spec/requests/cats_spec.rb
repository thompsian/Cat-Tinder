require 'rails_helper'

RSpec.describe "Cats", type: :request do
  describe "GET /cats" do
    it "works! (now write some real specs)" do
      get cats_path
      expect(response).to have_http_status(200)
    end

    it "doesn't create a cat without a name" do
        cat_params = {
        cat: {
          age: 4,
          enjoys: 'Meow Mix, and plenty of sunshine.'
          }
        }

        post '/cats', params: cat_params

        # This is a new test to make sure that our status is correct when the record can't be created
        # You can read more about HTTP response codes here: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        expect(response.status).to eq 422

        # We also want to check that the API lets us know what is wrong, so the frontend can prompt the user to fix it.
        json = JSON.parse(response.body)
        # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
        expect(json['name']).to include "can't be blank"
    end
  end
end
