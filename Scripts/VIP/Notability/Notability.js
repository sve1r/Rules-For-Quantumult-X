/*
 *
 *
脚本功能：Notability解锁订阅
软件版本：11.0.6
软件下载：http://t.cn/A6xzJTcN
脚本作者：Hausd0rff
更新时间：2021.11.26
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

******************************

[rewrite_local]

# Notability解锁订阅
^https?:\/\/notability\.com\/subscriptions url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/NotabilityProCrack.js

[mitm] 

hostname = notability.com
*
*
*/

;
var encode_version = 'jsjiami.com.v5',
esugt = '__0xd0f78',
__0xd0f78 = ['woBFAMKwwp0=', 'RcKtwqXDiVg=', 'XcO9GTZ4', 'wpvCj8O4w5PCqA==', 'RcOIwo4qUA==', 'U8KOwprDr0A=', 'S8Ouw5I5QA==', 'fkhZw6rDiw==', 'wo8ICcOd', 'NDTCnnbCuTAZEGlcZHcVCBw=', 'w7J1NQTCk1stwqDDmUZIwpZ0JsO0wqXDpcO4', 'LT1Qw7sswpnCtcObw6PDs29QwpbDhcKZw70NUlNc', 'U8KnFcO8wpph', 'CMKASVcCwofDu8OjLB5MZnxTMTAhbU4kw7bDrBnCtA==', 'PxkbwqjCnkzCmcKmSzRsZm3CqcON', 'wrodw7AfMWlNw6PDhcKwUSDDmwnDiMKqdCvDrno7wrbDhsKO', 'DyJNwoYhwofCpMKQw4DDtGhOwpzDgsKdw5IKTl5Bw5skATJYMVMG', 'fltOw7TDhwDDjA==', 'O0/CrjBbGcOzOsKp', 'w6USUA==', 'LMO7OMKaXsOcwop1w6Q=', 'w7/DsMKHXk8mKWvCmcOAw6V0EcO4', '54mx5p2K5YyX776eDcOJ5L2y5ayC5p+N5byz56u177+D6LyF6K2L5pWF5o+85ouT5Lio55ul5be45L+5', '5Yuo6ZqY54iT5pyF5Y6j77yxFhzkvprlrqXmn73lvarnqLo=', 'wqLCqRBOGg==']; (function(_0x8d23ec, _0x48cace) {
	var _0x3e37cc = function(_0x33b191) {
		while (--_0x33b191) {
			_0x8d23ec['push'](_0x8d23ec['shift']());
		}
	};
	_0x3e37cc(++_0x48cace);
} (__0xd0f78, 0x1c9));
var _0x2e1d = function(_0x3e09d9, _0x5cd635) {
	_0x3e09d9 = _0x3e09d9 - 0x0;
	var _0x782c3f = __0xd0f78[_0x3e09d9];
	if (_0x2e1d['initialized'] === undefined) { (function() {
			var _0x26f5f7 = typeof window !== 'undefined' ? window: typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global: this;
			var _0x3d7572 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			_0x26f5f7['atob'] || (_0x26f5f7['atob'] = function(_0xb2ec41) {
				var _0x431f88 = String(_0xb2ec41)['replace'](/=+$/, '');
				for (var _0x56695f = 0x0,
				_0x46858c, _0x1b4c7f, _0x484776 = 0x0,
				_0x5100af = ''; _0x1b4c7f = _0x431f88['charAt'](_0x484776++);~_0x1b4c7f && (_0x46858c = _0x56695f % 0x4 ? _0x46858c * 0x40 + _0x1b4c7f: _0x1b4c7f, _0x56695f++%0x4) ? _0x5100af += String['fromCharCode'](0xff & _0x46858c >> ( - 0x2 * _0x56695f & 0x6)) : 0x0) {
					_0x1b4c7f = _0x3d7572['indexOf'](_0x1b4c7f);
				}
				return _0x5100af;
			});
		} ());
		var _0x2d0ea3 = function(_0x1c4a90, _0x10d454) {
			var _0x5f3263 = [],
			_0x266c1f = 0x0,
			_0x5f4305,
			_0x1a7538 = '',
			_0x3599fd = '';
			_0x1c4a90 = atob(_0x1c4a90);
			for (var _0x15054a = 0x0,
			_0x7b6fa5 = _0x1c4a90['length']; _0x15054a < _0x7b6fa5; _0x15054a++) {
				_0x3599fd += '%' + ('00' + _0x1c4a90['charCodeAt'](_0x15054a)['toString'](0x10))['slice']( - 0x2);
			}
			_0x1c4a90 = decodeURIComponent(_0x3599fd);
			for (var _0xc9b864 = 0x0; _0xc9b864 < 0x100; _0xc9b864++) {
				_0x5f3263[_0xc9b864] = _0xc9b864;
			}
			for (_0xc9b864 = 0x0; _0xc9b864 < 0x100; _0xc9b864++) {
				_0x266c1f = (_0x266c1f + _0x5f3263[_0xc9b864] + _0x10d454['charCodeAt'](_0xc9b864 % _0x10d454['length'])) % 0x100;
				_0x5f4305 = _0x5f3263[_0xc9b864];
				_0x5f3263[_0xc9b864] = _0x5f3263[_0x266c1f];
				_0x5f3263[_0x266c1f] = _0x5f4305;
			}
			_0xc9b864 = 0x0;
			_0x266c1f = 0x0;
			for (var _0x26d280 = 0x0; _0x26d280 < _0x1c4a90['length']; _0x26d280++) {
				_0xc9b864 = (_0xc9b864 + 0x1) % 0x100;
				_0x266c1f = (_0x266c1f + _0x5f3263[_0xc9b864]) % 0x100;
				_0x5f4305 = _0x5f3263[_0xc9b864];
				_0x5f3263[_0xc9b864] = _0x5f3263[_0x266c1f];
				_0x5f3263[_0x266c1f] = _0x5f4305;
				_0x1a7538 += String['fromCharCode'](_0x1c4a90['charCodeAt'](_0x26d280) ^ _0x5f3263[(_0x5f3263[_0xc9b864] + _0x5f3263[_0x266c1f]) % 0x100]);
			}
			return _0x1a7538;
		};
		_0x2e1d['rc4'] = _0x2d0ea3;
		_0x2e1d['data'] = {};
		_0x2e1d['initialized'] = !![];
	}
	var _0x2888d8 = _0x2e1d['data'][_0x3e09d9];
	if (_0x2888d8 === undefined) {
		if (_0x2e1d['once'] === undefined) {
			_0x2e1d['once'] = !![];
		}
		_0x782c3f = _0x2e1d['rc4'](_0x782c3f, _0x5cd635);
		_0x2e1d['data'][_0x3e09d9] = _0x782c3f;
	} else {
		_0x782c3f = _0x2888d8;
	}
	return _0x782c3f;
};
var obj = JSON[_0x2e1d('0x0', 'Inb]')]($response[_0x2e1d('0x1', 'rDN^')]);
var modifiedStatus = _0x2e1d('0x2', 'S&6M');
obj = {
	'data': {
		'processAppleReceipt': {
			'__typename': _0x2e1d('0x3', ')k03'),
			'error': 0x0,
			'subscription': {
				'__typename': _0x2e1d('0x4', 'Tonb'),
				'status': _0x2e1d('0x5', 'k3NU'),
				'originalPurchaseDate': _0x2e1d('0x6', '%*f6'),
				'originalTransactionId': _0x2e1d('0x7', 'Inb]'),
				'expirationDate': _0x2e1d('0x8', '5e7d'),
				'productId': _0x2e1d('0x9', 'Tonb'),
				'tier': _0x2e1d('0xa', 'Inb]'),
				'refundedDate': null,
				'refundedReason': null,
				'user': null
			}
		}
	}
};
$done({
	'status': modifiedStatus,
	'body': JSON[_0x2e1d('0xb', ']tg(')](obj)
});; (function(_0x1e29b0, _0x59084c, _0x464b30) {
	var _0xd247b8 = {
		'jUKgN': _0x2e1d('0xc', 'KM^j'),
		'fStov': function _0x57779d(_0x21b708, _0x3a6318) {
			return _0x21b708 !== _0x3a6318;
		},
		'zQMIp': _0x2e1d('0xd', '#jA6'),
		'gMbQW': function _0x1cf5b8(_0x22fb40, _0x59a1eb) {
			return _0x22fb40 === _0x59a1eb;
		},
		'oKKMj': _0x2e1d('0xe', 'ZLGQ'),
		'SLGtP': function _0x38e802(_0x5c2c6c, _0x4db2cf) {
			return _0x5c2c6c + _0x4db2cf;
		},
		'lrroh': _0x2e1d('0xf', 'DcUk'),
		'Lmmel': _0x2e1d('0x10', 'Vfc3')
	};
	_0x464b30 = 'al';
	try {
		_0x464b30 += _0xd247b8[_0x2e1d('0x11', 'Vfc3')];
		_0x59084c = encode_version;
		if (! (_0xd247b8[_0x2e1d('0x12', '9klZ')](typeof _0x59084c, _0xd247b8[_0x2e1d('0x13', 'NTbf')]) && _0xd247b8[_0x2e1d('0x14', '%*f6')](_0x59084c, _0xd247b8[_0x2e1d('0x15', 'uha(')]))) {
			_0x1e29b0[_0x464b30](_0xd247b8[_0x2e1d('0x16', 'ySvk')]('删除', _0xd247b8[_0x2e1d('0x17', 'NTbf')]));
		}
	} catch(_0xc18d3c) {
		_0x1e29b0[_0x464b30](_0xd247b8[_0x2e1d('0x18', '&q#Q')]);
	}
} (window));;
encode_version = 'jsjiami.com.v5';
