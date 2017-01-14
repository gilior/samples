/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('../../app/app.module');
var import2 = require('@angular/common/src/common_module');
var import3 = require('@angular/core/src/application_module');
var import4 = require('@angular/platform-browser/src/browser');
var import5 = require('@angular/router/src/router_module');
var import6 = require('../../app/app-routing.module');
var import7 = require('@angular/common/src/localization');
var import8 = require('@angular/core/src/application_init');
var import9 = require('@angular/core/src/testability/testability');
var import10 = require('@angular/core/src/application_ref');
var import11 = require('@angular/core/src/linker/compiler');
var import12 = require('@angular/platform-browser/src/dom/events/hammer_gestures');
var import13 = require('@angular/platform-browser/src/dom/events/event_manager');
var import14 = require('@angular/platform-browser/src/dom/shared_styles_host');
var import15 = require('@angular/platform-browser/src/dom/dom_renderer');
var import16 = require('@angular/platform-browser/src/security/dom_sanitization_service');
var import17 = require('@angular/core/src/animation/animation_queue');
var import18 = require('@angular/core/src/linker/view_utils');
var import19 = require('@angular/platform-browser/src/browser/title');
var import20 = require('@angular/common/src/location/location');
var import21 = require('@angular/router/src/url_tree');
var import22 = require('@angular/router/src/router_outlet_map');
var import23 = require('@angular/core/src/linker/system_js_ng_module_factory_loader');
var import24 = require('@angular/router/src/router_preloader');
var import26 = require('./app.component.ngfactory');
var import27 = require('@angular/core/src/application_tokens');
var import28 = require('@angular/platform-browser/src/dom/events/dom_events');
var import29 = require('@angular/platform-browser/src/dom/events/key_events');
var import30 = require('@angular/core/src/zone/ng_zone');
var import31 = require('@angular/platform-browser/src/dom/debug/ng_probe');
var import32 = require('@angular/common/src/location/platform_location');
var import33 = require('@angular/common/src/location/location_strategy');
var import34 = require('@angular/router/src/url_handling_strategy');
var import35 = require('@angular/router/src/route_reuse_strategy');
var import36 = require('@angular/router/src/router');
var import37 = require('@angular/core/src/console');
var import38 = require('@angular/core/src/i18n/tokens');
var import39 = require('@angular/core/src/error_handler');
var import40 = require('@angular/platform-browser/src/dom/dom_tokens');
var import41 = require('@angular/platform-browser/src/dom/animation_driver');
var import42 = require('@angular/core/src/render/api');
var import43 = require('@angular/core/src/security');
var import44 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import45 = require('@angular/core/src/change_detection/differs/keyvalue_differs');
var import46 = require('@angular/core/src/linker/ng_module_factory_loader');
var import47 = require('@angular/router/src/router_config_loader');
var import48 = require('@angular/router/src/router_state');
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [import26.AppComponentNgFactory], [import26.AppComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_7", {
        get: function () {
            if ((this.__LOCALE_ID_7 == null)) {
                (this.__LOCALE_ID_7 = 'en-US');
            }
            return this.__LOCALE_ID_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_8", {
        get: function () {
            if ((this.__NgLocalization_8 == null)) {
                (this.__NgLocalization_8 = new import7.NgLocaleLocalization(this._LOCALE_ID_7));
            }
            return this.__NgLocalization_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_13", {
        get: function () {
            if ((this.__ApplicationRef_13 == null)) {
                (this.__ApplicationRef_13 = this._ApplicationRef__12);
            }
            return this.__ApplicationRef_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_14", {
        get: function () {
            if ((this.__Compiler_14 == null)) {
                (this.__Compiler_14 = new import11.Compiler());
            }
            return this.__Compiler_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_15", {
        get: function () {
            if ((this.__APP_ID_15 == null)) {
                (this.__APP_ID_15 = import27._appIdRandomProviderFactory());
            }
            return this.__APP_ID_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_16", {
        get: function () {
            if ((this.__DOCUMENT_16 == null)) {
                (this.__DOCUMENT_16 = import4._document());
            }
            return this.__DOCUMENT_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_17", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_17 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_17 = new import12.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_18", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_18 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_18 = [
                    new import28.DomEventsPlugin(),
                    new import29.KeyEventsPlugin(),
                    new import12.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_17)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_19", {
        get: function () {
            if ((this.__EventManager_19 == null)) {
                (this.__EventManager_19 = new import13.EventManager(this._EVENT_MANAGER_PLUGINS_18, this.parent.get(import30.NgZone)));
            }
            return this.__EventManager_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_20", {
        get: function () {
            if ((this.__DomSharedStylesHost_20 == null)) {
                (this.__DomSharedStylesHost_20 = new import14.DomSharedStylesHost(this._DOCUMENT_16));
            }
            return this.__DomSharedStylesHost_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_21", {
        get: function () {
            if ((this.__AnimationDriver_21 == null)) {
                (this.__AnimationDriver_21 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_22", {
        get: function () {
            if ((this.__DomRootRenderer_22 == null)) {
                (this.__DomRootRenderer_22 = new import15.DomRootRenderer_(this._DOCUMENT_16, this._EventManager_19, this._DomSharedStylesHost_20, this._AnimationDriver_21, this._APP_ID_15));
            }
            return this.__DomRootRenderer_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgProbeToken_23", {
        get: function () {
            if ((this.__NgProbeToken_23 == null)) {
                (this.__NgProbeToken_23 = [import5.routerNgProbeToken()]);
            }
            return this.__NgProbeToken_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_24", {
        get: function () {
            if ((this.__RootRenderer_24 == null)) {
                (this.__RootRenderer_24 = import31._createConditionalRootRenderer(this._DomRootRenderer_22, this.parent.get(import31.NgProbeToken, null), this._NgProbeToken_23));
            }
            return this.__RootRenderer_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_25", {
        get: function () {
            if ((this.__DomSanitizer_25 == null)) {
                (this.__DomSanitizer_25 = new import16.DomSanitizerImpl());
            }
            return this.__DomSanitizer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_26", {
        get: function () {
            if ((this.__Sanitizer_26 == null)) {
                (this.__Sanitizer_26 = this._DomSanitizer_25);
            }
            return this.__Sanitizer_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_27", {
        get: function () {
            if ((this.__AnimationQueue_27 == null)) {
                (this.__AnimationQueue_27 = new import17.AnimationQueue(this.parent.get(import30.NgZone)));
            }
            return this.__AnimationQueue_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_28", {
        get: function () {
            if ((this.__ViewUtils_28 == null)) {
                (this.__ViewUtils_28 = new import18.ViewUtils(this._RootRenderer_24, this._Sanitizer_26, this._AnimationQueue_27));
            }
            return this.__ViewUtils_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_29", {
        get: function () {
            if ((this.__IterableDiffers_29 == null)) {
                (this.__IterableDiffers_29 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_30", {
        get: function () {
            if ((this.__KeyValueDiffers_30 == null)) {
                (this.__KeyValueDiffers_30 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_31", {
        get: function () {
            if ((this.__SharedStylesHost_31 == null)) {
                (this.__SharedStylesHost_31 = this._DomSharedStylesHost_20);
            }
            return this.__SharedStylesHost_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_32", {
        get: function () {
            if ((this.__Title_32 == null)) {
                (this.__Title_32 = new import19.Title());
            }
            return this.__Title_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_33", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_33 == null)) {
                (this.__ROUTER_CONFIGURATION_33 = { useHash: true });
            }
            return this.__ROUTER_CONFIGURATION_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_34", {
        get: function () {
            if ((this.__LocationStrategy_34 == null)) {
                (this.__LocationStrategy_34 = import5.provideLocationStrategy(this.parent.get(import32.PlatformLocation), this.parent.get(import33.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_33));
            }
            return this.__LocationStrategy_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_35", {
        get: function () {
            if ((this.__Location_35 == null)) {
                (this.__Location_35 = new import20.Location(this._LocationStrategy_34));
            }
            return this.__Location_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_36", {
        get: function () {
            if ((this.__UrlSerializer_36 == null)) {
                (this.__UrlSerializer_36 = new import21.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_37", {
        get: function () {
            if ((this.__RouterOutletMap_37 == null)) {
                (this.__RouterOutletMap_37 = new import22.RouterOutletMap());
            }
            return this.__RouterOutletMap_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_38", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_38 == null)) {
                (this.__NgModuleFactoryLoader_38 = new import23.SystemJsNgModuleLoader(this._Compiler_14, this.parent.get(import23.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_39", {
        get: function () {
            if ((this.__ROUTES_39 == null)) {
                (this.__ROUTES_39 = [[
                        {
                            path: 'one-page',
                            loadChildren: 'app/one-page/one-page.module#OnePageModule'
                        },
                        {
                            path: '',
                            redirectTo: 'one-page',
                            pathMatch: 'full'
                        }
                    ]
                ]);
            }
            return this.__ROUTES_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_40", {
        get: function () {
            if ((this.__Router_40 == null)) {
                (this.__Router_40 = import5.setupRouter(this._ApplicationRef_13, this._UrlSerializer_36, this._RouterOutletMap_37, this._Location_35, this, this._NgModuleFactoryLoader_38, this._Compiler_14, this._ROUTES_39, this._ROUTER_CONFIGURATION_33, this.parent.get(import34.UrlHandlingStrategy, null), this.parent.get(import35.RouteReuseStrategy, null)));
            }
            return this.__Router_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_41", {
        get: function () {
            if ((this.__ActivatedRoute_41 == null)) {
                (this.__ActivatedRoute_41 = import5.rootRoute(this._Router_40));
            }
            return this.__ActivatedRoute_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_45", {
        get: function () {
            if ((this.__PreloadAllModules_45 == null)) {
                (this.__PreloadAllModules_45 = new import24.PreloadAllModules());
            }
            return this.__PreloadAllModules_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_46", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_46 == null)) {
                (this.__ROUTER_INITIALIZER_46 = import5.initialRouterNavigation(this._Router_40, this._ApplicationRef_13, this._RouterPreloader_44, this._ROUTER_CONFIGURATION_33));
            }
            return this.__ROUTER_INITIALIZER_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_47", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_47 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_47 = [this._ROUTER_INITIALIZER_46]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_47;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._ROUTER_FORROOT_GUARD_3 = import5.provideForRootGuard(this.parent.get(import36.Router, null));
        this._RouterModule_4 = new import5.RouterModule(this._ROUTER_FORROOT_GUARD_3);
        this._AppRoutingModule_5 = new import6.AppRoutingModule();
        this._AppModule_6 = new import1.AppModule();
        this._ErrorHandler_9 = import4.errorHandler();
        this._ApplicationInitStatus_10 = new import8.ApplicationInitStatus(this.parent.get(import8.APP_INITIALIZER, null));
        this._Testability_11 = new import9.Testability(this.parent.get(import30.NgZone));
        this._ApplicationRef__12 = new import10.ApplicationRef_(this.parent.get(import30.NgZone), this.parent.get(import37.Console), this, this._ErrorHandler_9, this, this._ApplicationInitStatus_10, this.parent.get(import9.TestabilityRegistry, null), this._Testability_11);
        this._NoPreloading_42 = new import24.NoPreloading();
        this._PreloadingStrategy_43 = this._NoPreloading_42;
        this._RouterPreloader_44 = new import24.RouterPreloader(this._Router_40, this._NgModuleFactoryLoader_38, this._Compiler_14, this, this._PreloadingStrategy_43);
        return this._AppModule_6;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_3;
        }
        if ((token === import5.RouterModule)) {
            return this._RouterModule_4;
        }
        if ((token === import6.AppRoutingModule)) {
            return this._AppRoutingModule_5;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_6;
        }
        if ((token === import38.LOCALE_ID)) {
            return this._LOCALE_ID_7;
        }
        if ((token === import7.NgLocalization)) {
            return this._NgLocalization_8;
        }
        if ((token === import39.ErrorHandler)) {
            return this._ErrorHandler_9;
        }
        if ((token === import8.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_10;
        }
        if ((token === import9.Testability)) {
            return this._Testability_11;
        }
        if ((token === import10.ApplicationRef_)) {
            return this._ApplicationRef__12;
        }
        if ((token === import10.ApplicationRef)) {
            return this._ApplicationRef_13;
        }
        if ((token === import11.Compiler)) {
            return this._Compiler_14;
        }
        if ((token === import27.APP_ID)) {
            return this._APP_ID_15;
        }
        if ((token === import40.DOCUMENT)) {
            return this._DOCUMENT_16;
        }
        if ((token === import12.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_17;
        }
        if ((token === import13.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_18;
        }
        if ((token === import13.EventManager)) {
            return this._EventManager_19;
        }
        if ((token === import14.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_20;
        }
        if ((token === import41.AnimationDriver)) {
            return this._AnimationDriver_21;
        }
        if ((token === import15.DomRootRenderer)) {
            return this._DomRootRenderer_22;
        }
        if ((token === import10.NgProbeToken)) {
            return this._NgProbeToken_23;
        }
        if ((token === import42.RootRenderer)) {
            return this._RootRenderer_24;
        }
        if ((token === import16.DomSanitizer)) {
            return this._DomSanitizer_25;
        }
        if ((token === import43.Sanitizer)) {
            return this._Sanitizer_26;
        }
        if ((token === import17.AnimationQueue)) {
            return this._AnimationQueue_27;
        }
        if ((token === import18.ViewUtils)) {
            return this._ViewUtils_28;
        }
        if ((token === import44.IterableDiffers)) {
            return this._IterableDiffers_29;
        }
        if ((token === import45.KeyValueDiffers)) {
            return this._KeyValueDiffers_30;
        }
        if ((token === import14.SharedStylesHost)) {
            return this._SharedStylesHost_31;
        }
        if ((token === import19.Title)) {
            return this._Title_32;
        }
        if ((token === import5.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_33;
        }
        if ((token === import33.LocationStrategy)) {
            return this._LocationStrategy_34;
        }
        if ((token === import20.Location)) {
            return this._Location_35;
        }
        if ((token === import21.UrlSerializer)) {
            return this._UrlSerializer_36;
        }
        if ((token === import22.RouterOutletMap)) {
            return this._RouterOutletMap_37;
        }
        if ((token === import46.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_38;
        }
        if ((token === import47.ROUTES)) {
            return this._ROUTES_39;
        }
        if ((token === import36.Router)) {
            return this._Router_40;
        }
        if ((token === import48.ActivatedRoute)) {
            return this._ActivatedRoute_41;
        }
        if ((token === import24.NoPreloading)) {
            return this._NoPreloading_42;
        }
        if ((token === import24.PreloadingStrategy)) {
            return this._PreloadingStrategy_43;
        }
        if ((token === import24.RouterPreloader)) {
            return this._RouterPreloader_44;
        }
        if ((token === import24.PreloadAllModules)) {
            return this._PreloadAllModules_45;
        }
        if ((token === import5.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_46;
        }
        if ((token === import27.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_47;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__12.ngOnDestroy();
        this._RouterPreloader_44.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
exports.AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map