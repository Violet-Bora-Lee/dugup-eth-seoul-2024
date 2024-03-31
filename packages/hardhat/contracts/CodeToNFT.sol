//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CodeToNFT is ERC721URIStorage {
	using Counters for Counters.Counter;
	Counters.Counter private _tokenIds;

	// The address of the DUG coin contract
	address public dugCoinAddress;
	// The amount of DUG coins to reward for each NFT minted
	uint256 public constant DUG_REWARD = 500;

	// Maps the code to its redemption status
	mapping(string => bool) private redeemedCodes;

	constructor(address _dugCoinAddress) ERC721("CodeToNFT", "CTN") {
		require(_dugCoinAddress != address(0), "Invalid DUG coin address");
		dugCoinAddress = _dugCoinAddress;
	}

	// Allows any user to redeem a code and mint an NFT, and receive DUG coins as a reward
	function redeemCodeAndMintNFT(string memory code, string memory tokenURI) public {
		require(isValidCode(code), "Invalid or already redeemed code");

		redeemedCodes[code] = true;
		_tokenIds.increment();

		uint256 newItemId = _tokenIds.current();
		_mint(msg.sender, newItemId);
		_setTokenURI(newItemId, tokenURI);

		// Reward the user with DUG coins
		require(IERC20(dugCoinAddress).transfer(msg.sender, DUG_REWARD), "Failed to transfer DUG coins");
	}

	// Checks the format and redemption status of the code
	function isValidCode(string memory code) public view returns (bool) {
		if(redeemedCodes[code]) {
			return false; // The code has already been redeemed
		}
		// In practice, you should add logic to verify the format and validity of the code.
		return true;
	}

	// Checks if a code has been redeemed
	function isCodeRedeemed(string memory code) public view returns (bool) {
		return redeemedCodes[code];
	}
}
