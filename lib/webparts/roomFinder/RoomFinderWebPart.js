"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var strings = require("RoomFinderWebPartStrings");
var BabylonRenderer_1 = require("./BabylonRenderer");
var RoomFinderWebPart = (function (_super) {
    __extends(RoomFinderWebPart, _super);
    function RoomFinderWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoomFinderWebPart.prototype.render = function () {
        var elementId = "theCanvas";
        this.domElement.innerHTML = "<canvas id='" + elementId + "' width='1000' height='600'></canvas>";
        var rend = new BabylonRenderer_1.default();
        rend.initialize(document.getElementById(elementId));
    };
    Object.defineProperty(RoomFinderWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    RoomFinderWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return RoomFinderWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = RoomFinderWebPart;

//# sourceMappingURL=RoomFinderWebPart.js.map
