require('minitest/autorun')
require('minitest/rg')
require_relative('../card')
require_relative('../testing_task_2')

class TestCardGame < MiniTest::Test

  def setup

    @card1 = Card.new("Clubs", 1)
    @card2 = Card.new("Hearts", 3,)
    @card3 = Card.new("Diamonds", 10)
    @card4 = Card.new("Spades", 8)
    @cards = [@card1, @card2, @card3, @card4]
    @game = CardGame.new()

  end

  def test_check_for_an_ace
    assert_equal(true, @game.check_for_ace(@card1))
    assert_equal(false, @game.check_for_ace(@card3))
  end

  def test_check_for_the_highest_card
    assert_equal(@card3, @game.highest_card(@card1, @card3))
    assert_equal(@card4, @game.highest_card(@card2, @card4))
  end

  def test_total_number_cards
    assert_equal("You have a total of 22", @game.cards_total(@cards))
  end

end
