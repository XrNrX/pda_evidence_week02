### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card) #should be named check_for_ace
    if card.value = 1   # should be ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # local viariables no separated by comma and should be def not dif
  if card1.value > card2.value
    return card.name # need to remove .name
  else
    card2.name # no need for .name
  end
end
end

def self.cards_total(cards) #remove the self.
  total # this should equal 0
  for card in cards
    total += card.value
    return "You have a total of" + total #string interpolation should be used here
  end
end


```
