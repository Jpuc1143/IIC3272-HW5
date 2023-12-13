// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

enum BetTypes {
  s0, s1, s2, s3, s4, s5, s6, s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,
  s19,s20,s21,s22,s23,s24,s25,s26,s27,s28,s29,s30,s31,s32,s33,s34,s35,s36,s00,
  // 0(s0) - 37(s00)
  // odd = 38 
  odd, even
}

struct BetInput{
		uint8 betType;
		uint32 amount;
	}

contract Roulette {
  struct Bet{
    uint8 betType;
    uint32 amount;
  }

  uint private gameCount = 0;
  address payable private owner;


  constructor() {
	  owner = payable (msg.sender);
  }

  modifier onlyOwner() {
	  require(msg.sender == owner);
	  _;
  }

  function getBalance() public view returns (uint balance){
    return address(this).balance;
  }

  function withdraw(uint amount) public onlyOwner {
    require(amount >= address(this).balance );
    owner.transfer(amount);
  }

  function bet(Bet[] memory _bets) public payable returns (uint) {
    uint maxPossiblePayout = 0;
    for (uint i = 0; i < _bets.length; i++) {
      maxPossiblePayout += _bets[i].amount
      + calculatePayout(_bets[i].betType, _bets[i].amount);
    }
    require(maxPossiblePayout <= address(this).balance);

    uint result = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, gameCount))) % 38;

    uint payout = 0;
    for(uint i = 0; i < _bets.length; i++) {
      if (decideBetWon(_bets[i].betType, result)) {
        payout += _bets[i].amount
        + calculatePayout(_bets[i].betType, _bets[i].amount);
      }
    }

    if (payout > 0) {
      payable(msg.sender).transfer(payout);
    }

    return result;
  }

  function calculatePayout(uint _betType, uint _amount) public pure returns (uint payout) {
    require(0 <= _betType && _betType <= uint(type(BetTypes).max));
    if (_betType <= uint(BetTypes.s00)) {
      return _amount * 35;
    } else if (_betType == uint(BetTypes.odd)) {
      return _amount;
    } else if (_betType == uint(BetTypes.even)) {
      return _amount;
    }
  }

  function decideBetWon(uint _betType, uint result) internal pure returns (bool decision) {
    if (_betType <= uint(BetTypes.s36)) {
      return result == _betType;
    } else if (_betType == uint(BetTypes.s00)) {
      return result == 0;
    } else if (_betType == uint(BetTypes.odd)) {
      return result != 0 && result % 2 == 1;
    } else if (_betType == uint(BetTypes.even)) {
      return result != 0 && result % 2 == 0;
    }
  }
}
