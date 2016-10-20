require 'test_helper'
#
class PagesControllerTest < ActionDispatch::IntegrationTest
  test 'should get root' do
    get root_path
    assert_response :success
  end

  test 'should get profile' do
    get profile_path
    assert_response :success
  end

  test 'should get leaderboard' do
    get leaderboard_path
    assert_response :success
  end

  test 'should get game' do
    get game_path
    assert_response :success
  end
end
