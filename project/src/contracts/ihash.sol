pragma solidity >=0.4.21 <0.6.0;
contract ihash {
    //smart contract code is here
    //read and write function//
    string ihasheth;
    function set(string memory _ihasheth) public
    {
        ihasheth=_ihasheth;
    }
    function get() public view returns (string memory)
    {
        return ihasheth;
    }




}