export default {
"abi":[
{"inputs":[{"internalType":"int256","name":"_i256","type":"int256"},{"internalType":"uint256","name":"_ui256","type":"uint256"},{"internalType":"bytes32","name":"_b32","type":"bytes32"},{"internalType":"bytes","name":"_b","type":"bytes"},{"internalType":"string","name":"_s","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"i","type":"uint256"},{"components":[{"internalType":"int256","name":"i256","type":"int256"},{"internalType":"uint256","name":"ui256","type":"uint256"},{"internalType":"bytes32","name":"b32","type":"bytes32"},{"internalType":"bytes","name":"b","type":"bytes"},{"internalType":"string","name":"s","type":"string"}],"indexed":false,"internalType":"struct Interface.SimpleStruct","name":"ss","type":"tuple"}],"name":"Set1","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"b","type":"bytes32"},{"components":[{"components":[{"internalType":"int256","name":"i256","type":"int256"},{"internalType":"uint256","name":"ui256","type":"uint256"},{"internalType":"bytes32","name":"b32","type":"bytes32"},{"internalType":"bytes","name":"b","type":"bytes"},{"internalType":"string","name":"s","type":"string"}],"internalType":"struct Interface.SimpleStruct","name":"ss","type":"tuple"}],"indexed":false,"internalType":"struct Interface.NextedStruct","name":"ns","type":"tuple"}],"name":"Set2","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"s","type":"string"},{"components":[{"components":[{"internalType":"int256","name":"i256","type":"int256"},{"internalType":"uint256","name":"ui256","type":"uint256"},{"internalType":"bytes32","name":"b32","type":"bytes32"},{"internalType":"bytes","name":"b","type":"bytes"},{"internalType":"string","name":"s","type":"string"}],"internalType":"struct Interface.SimpleStruct","name":"ss","type":"tuple"}],"indexed":false,"internalType":"struct Interface.NextedStruct[]","name":"nsa","type":"tuple[]"}],"name":"Set3","type":"event"},
{"inputs":[],"name":"PI","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"b","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"b2ns","outputs":[{"components":[{"internalType":"int256","name":"i256","type":"int256"},{"internalType":"uint256","name":"ui256","type":"uint256"},{"internalType":"bytes32","name":"b32","type":"bytes32"},{"internalType":"bytes","name":"b","type":"bytes"},{"internalType":"string","name":"s","type":"string"}],"internalType":"struct Interface.SimpleStruct","name":"ss","type":"tuple"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"b32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"b32a","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ba","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"i256","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"i256a","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"i2as","outputs":[{"components":[{"internalType":"int256[]","name":"i256a","type":"int256[]"},{"internalType":"uint256[]","name":"ui256a","type":"uint256[]"},{"internalType":"bytes32[]","name":"b32a","type":"bytes32[]"},{"internalType":"bytes[]","name":"ba","type":"bytes[]"},{"internalType":"string[]","name":"sa","type":"string[]"}],"internalType":"struct Interface.ArrayStruct","name":"a","type":"tuple"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"i2ss","outputs":[{"internalType":"int256","name":"i256","type":"int256"},{"internalType":"uint256","name":"ui256","type":"uint256"},{"internalType":"bytes32","name":"b32","type":"bytes32"},{"internalType":"bytes","name":"b","type":"bytes"},{"internalType":"string","name":"s","type":"string"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address payable","name":"to","type":"address"}],"name":"pay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},
{"inputs":[],"name":"pay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},
{"inputs":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"pay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"n","type":"uint256"}],"name":"pow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},
{"inputs":[],"name":"s","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"s2nsa","outputs":[{"components":[{"internalType":"int256","name":"i256","type":"int256"},{"internalType":"uint256","name":"ui256","type":"uint256"},{"internalType":"bytes32","name":"b32","type":"bytes32"},{"internalType":"bytes","name":"b","type":"bytes"},{"internalType":"string","name":"s","type":"string"}],"internalType":"struct Interface.SimpleStruct","name":"ss","type":"tuple"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"sa","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"bytes32","name":"_b","type":"bytes32"},{"components":[{"components":[{"internalType":"int256","name":"i256","type":"int256"},{"internalType":"uint256","name":"ui256","type":"uint256"},{"internalType":"bytes32","name":"b32","type":"bytes32"},{"internalType":"bytes","name":"b","type":"bytes"},{"internalType":"string","name":"s","type":"string"}],"internalType":"struct Interface.SimpleStruct","name":"ss","type":"tuple"}],"internalType":"struct Interface.NextedStruct","name":"ns","type":"tuple"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"_i","type":"uint256"},{"components":[{"internalType":"int256","name":"i256","type":"int256"},{"internalType":"uint256","name":"ui256","type":"uint256"},{"internalType":"bytes32","name":"b32","type":"bytes32"},{"internalType":"bytes","name":"b","type":"bytes"},{"internalType":"string","name":"s","type":"string"}],"internalType":"struct Interface.SimpleStruct","name":"ss","type":"tuple"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"string","name":"_s","type":"string"},{"components":[{"components":[{"internalType":"int256","name":"i256","type":"int256"},{"internalType":"uint256","name":"ui256","type":"uint256"},{"internalType":"bytes32","name":"b32","type":"bytes32"},{"internalType":"bytes","name":"b","type":"bytes"},{"internalType":"string","name":"s","type":"string"}],"internalType":"struct Interface.SimpleStruct","name":"ss","type":"tuple"}],"internalType":"struct Interface.NextedStruct[]","name":"nsa","type":"tuple[]"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"ui256","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ui256a","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}
]
}