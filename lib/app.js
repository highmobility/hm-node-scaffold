'use strict';

var app = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return hmkit.telematics.sendCommand('356675D0CC76A8FFF5', // car serial
                        hmkit.commands.EngineCommand.turnOn());

                    case 2:
                        response = _context.sent;


                        console.log(response.bytes()); // [0, 53, 1, 1]
                        console.log(response.parse()); // EngineResponse { engine: 1 }

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function app() {
        return _ref.apply(this, arguments);
    };
}();

// run app


var _hmkit = require('hmkit');

var _hmkit2 = _interopRequireDefault(_hmkit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var defaultDeviceCertificate = 'dGVzdPZ/oYYWgKrJFhGOCcX/U8uWPy3SVh1dVY8r3vb0yFLi8kA1duKvysIPprpqbQw089Z33MdPuFGQU9Le509pmeAcnqiqOrrnVQHC+o+4tdUVLijFkBys6WliZSqwVY7KOu5SXSBY1PU8ophRJKm7X+r26qspCawv1S43ZboFGoyCxIpRUwsi0zsV3Daskx05USIR50X5';
var defaultDevicePrivateKey = 'jVNDUrJjZnVFYybph7MoMiFpTqi6Bz3w6iG+XqKD1e0=';
var defaultIssuerPublicKey = 'w9D0H6D18iXHXFN/mdTL3R22EjJFoEO4fTpHf5KYerqHz+d6JXJ7ClRpDpgJ7XXrJxBFsNHehdozBFSW9mXilg==';

var hmkit = new _hmkit2.default(defaultDeviceCertificate, defaultDevicePrivateKey, defaultIssuerPublicKey);

app();