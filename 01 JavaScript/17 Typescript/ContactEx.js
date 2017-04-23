var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ContactEx = (function (_super) {
    __extends(ContactEx, _super);
    function ContactEx(name, email, website) {
        var _this = _super.call(this, name, email) || this;
        _this.website = website;
        return _this;
    }
    ContactEx.prototype.dump = function () {
        _super.prototype.dump.call(this);
        console.log(this.website);
    };
    return ContactEx;
}(Contact));
//# sourceMappingURL=ContactEx.js.map