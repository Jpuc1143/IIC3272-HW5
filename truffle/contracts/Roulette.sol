// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

enum BetTypes {
  s0, s1, s2, s3, s4, s5, s6, s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,
  s19,s20,s21,s22,s23,s24,s25,s26,s27,s28,s29,s30,s31,s32,s33,s34,s35,s36,s00,
  // 0(s0) - 37(s00)
  // odd = 38 
  odd, even,
  low, high,
  c1, c2, c3,
  r1, r2, r3,
  red, black
}

struct BetInput{
		uint8 betType;
		uint32 amount;
	}


contract Roulette {
event Result(
	address indexed _player,
	uint _gameId,
	uint _result,
	uint _payout
);

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

  function deposit() public payable onlyOwner {}

  function withdraw(uint amount) public onlyOwner {
    require(amount >= address(this).balance );
    owner.transfer(amount);
  }

  function bet(Bet[] memory _bets) public payable returns (uint) {
    uint maxPossiblePayout = 0;
    uint totalBet = 0;
    for (uint i = 0; i < _bets.length; i++) {
      maxPossiblePayout += _bets[i].amount
      + calculatePayout(_bets[i].betType, _bets[i].amount);

      totalBet += _bets[i].amount;
    }
    //require(totalBet == msg.value);
    //require(maxPossiblePayout <= address(this).balance);

    uint result = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, gameCount))) % 38;

    uint payout = 0;
    for(uint j = 0; j < _bets.length; j++) {
      if (decideBetWon(_bets[j].betType, result)) {
        payout += _bets[j].amount
        + calculatePayout(_bets[j].betType, _bets[j].amount);
      }
    }

    if (payout > 0) {
      //payable(msg.sender).transfer(payout);
    }

    emit Result(msg.sender, gameCount, result, payout);
    gameCount++;
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
    } else if (_betType == uint(BetTypes.low)) {
      return _amount;
    } else if (_betType == uint(BetTypes.high)) {
      return _amount;
    } else if (_betType == uint(BetTypes.c1)) {
      return 2 * _amount;
    } else if (_betType == uint(BetTypes.c2)) {
      return 2 * _amount;
    } else if (_betType == uint(BetTypes.c3)) {
      return 2 * _amount;
    } else if (_betType == uint(BetTypes.r1)) {
      return 2 * _amount;
    } else if (_betType == uint(BetTypes.r2)) {
      return 2 * _amount;
    } else if (_betType == uint(BetTypes.r3)) {
      return 2 * _amount;
    } else if (_betType == uint(BetTypes.red)) {
      return _amount;
    } else if (_betType == uint(BetTypes.black)) {
      return _amount;
    }

  }

  function decideBetWon(uint _betType, uint _result) internal pure returns (bool decision) {
    if (_betType <= uint(BetTypes.s36)) {
      return _result == _betType;
    } else if (_betType == uint(BetTypes.s00)) {
      return _result == 37;
    } else if (_betType == uint(BetTypes.odd)) {
      return _result != 0 && _result % 2 == 1;
    } else if (_betType == uint(BetTypes.even)) {
      return _result != 0 && _result % 2 == 0;
    } else if (_betType == uint(BetTypes.low)) {
      return 1 <= _result && _result <= 18 ;
    } else if (_betType == uint(BetTypes.high)) {
      return 19 <= _result && _result <= 36 ;
    } else if (_betType == uint(BetTypes.c1)) {
      return _result != 0 && (_result-1) % 3 == 0;
    } else if (_betType == uint(BetTypes.c2)) {
      return _result != 0 && (_result-1) % 3 == 1;
    } else if (_betType == uint(BetTypes.c3)) {
      return _result != 0 && (_result-1) % 3 == 2;
    } else if (_betType == uint(BetTypes.r1)) {
      return 1 <= _result && _result <= 12;
    } else if (_betType == uint(BetTypes.r2)) {
      return 13 <= _result && _result <= 24;
    } else if (_betType == uint(BetTypes.r3)) {
      return 25 <= _result && _result <= 36;
    } else if (_betType == uint(BetTypes.red)) { // TODO
      return true;
    } else if (_betType == uint(BetTypes.black)) {
      return false;
    }
  }
}
