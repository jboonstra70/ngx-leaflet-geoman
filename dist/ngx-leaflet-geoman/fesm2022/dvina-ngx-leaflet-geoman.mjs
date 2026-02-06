import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Directive, NgModule } from '@angular/core';
import * as i1 from '@bluehalo/ngx-leaflet';
import { LeafletDirectiveWrapper, LeafletUtil, LeafletModule } from '@bluehalo/ngx-leaflet';
import '@geoman-io/leaflet-geoman-free';

/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://rilke.ist/license
 */
class LeafletGeomanDirective {
    zone;
    leafletDirective;
    geomanInstance;
    controlOptions = null;
    // Configure the translation
    geomanTranslations = null;
    geomanLocal = 'en';
    // Configure callback function for the map
    geomanReady = new EventEmitter();
    // Draw Events
    onGlobalDrawModeToggled = new EventEmitter();
    onDrawStart = new EventEmitter();
    onDrawEnd = new EventEmitter();
    onCreate = new EventEmitter();
    onVertexAdded = new EventEmitter();
    onSnap = new EventEmitter();
    onCenterPlaced = new EventEmitter();
    onEdit = new EventEmitter();
    onUpdate = new EventEmitter();
    onEditEnable = new EventEmitter();
    onEditDisable = new EventEmitter();
    onVertexRemoved = new EventEmitter();
    onVertexClick = new EventEmitter();
    onMarkerDragStart = new EventEmitter();
    onMarkerDrag = new EventEmitter();
    onMarkerDragEnd = new EventEmitter();
    onLayerReset = new EventEmitter();
    onIntersect = new EventEmitter();
    onChange = new EventEmitter();
    onTextChange = new EventEmitter();
    onTextFocus = new EventEmitter();
    onTextBlur = new EventEmitter();
    onGlobalEditModeToggled = new EventEmitter();
    onGlobalDragModeToggled = new EventEmitter();
    onDragStart = new EventEmitter();
    onDrag = new EventEmitter();
    onDragEnd = new EventEmitter();
    onDragEnable = new EventEmitter();
    onDragDisable = new EventEmitter();
    onRemove = new EventEmitter();
    onGlobalRemovalModeToggled = new EventEmitter();
    onGlobalCutModeToggled = new EventEmitter();
    onCut = new EventEmitter();
    onRotateEnable = new EventEmitter();
    onRotateDisable = new EventEmitter();
    onRotateStart = new EventEmitter();
    onRotate = new EventEmitter();
    onRotateEnd = new EventEmitter();
    onGlobalRotateModeToggled = new EventEmitter();
    onLangChange = new EventEmitter();
    onButtonClick = new EventEmitter();
    onActionClick = new EventEmitter();
    onKeyboardKey = new EventEmitter();
    constructor(leafletDirective, zone) {
        this.zone = zone;
        this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
    }
    ngOnInit() {
        this.leafletDirective.init();
        // Register the main handler for events coming from the geoman plugin
        const map = this.leafletDirective.getMap();
        this.geomanInstance = map.pm;
        // Set Locale
        this.geomanInstance.setLang(this.geomanLocal, this.geomanTranslations);
        // Add the control to the map
        // this.geomanInstance.addControls(this.controlOptions);
        map.on('pm:globaldrawmodetoggled', (e) => LeafletUtil.handleEvent(this.zone, this.onGlobalDrawModeToggled, e));
        map.on('pm:drawstart', (e) => LeafletUtil.handleEvent(this.zone, this.onDrawStart, e));
        map.on('pm:drawend', (e) => LeafletUtil.handleEvent(this.zone, this.onDrawEnd, e));
        map.on('pm:create', (e) => {
            e.layer.on('pm:edit', (el) => LeafletUtil.handleEvent(this.zone, this.onEdit, el));
            e.layer.on('pm:update', (el) => LeafletUtil.handleEvent(this.zone, this.onUpdate, el));
            e.layer.on('pm:enable', (el) => LeafletUtil.handleEvent(this.zone, this.onEditEnable, el));
            e.layer.on('pm:disable', (el) => LeafletUtil.handleEvent(this.zone, this.onEditDisable, el));
            e.layer.on('pm:vertexadded', (el) => LeafletUtil.handleEvent(this.zone, this.onVertexAdded, el));
            e.layer.on('pm:vertexremoved', (el) => LeafletUtil.handleEvent(this.zone, this.onVertexRemoved, el));
            e.layer.on('pm:vertexclick', (el) => LeafletUtil.handleEvent(this.zone, this.onVertexClick, el));
            e.layer.on('pm:markerdragstart', (el) => LeafletUtil.handleEvent(this.zone, this.onMarkerDragStart, el));
            e.layer.on('pm:markerdrag', (el) => LeafletUtil.handleEvent(this.zone, this.onMarkerDrag, el));
            e.layer.on('pm:markerdragend', (el) => LeafletUtil.handleEvent(this.zone, this.onMarkerDragEnd, el));
            e.layer.on('pm:layerreset', (el) => LeafletUtil.handleEvent(this.zone, this.onLayerReset, el));
            e.layer.on('pm:snap', (el) => LeafletUtil.handleEvent(this.zone, this.onSnap, el));
            e.layer.on('pm:snapdrag', (el) => LeafletUtil.handleEvent(this.zone, this.onSnap, el));
            e.layer.on('pm:unsnap', (el) => LeafletUtil.handleEvent(this.zone, this.onSnap, el));
            e.layer.on('pm:intersect', (el) => LeafletUtil.handleEvent(this.zone, this.onIntersect, el));
            e.layer.on('pm:change', (el) => LeafletUtil.handleEvent(this.zone, this.onChange, el));
            e.layer.on('pm:centerplaced', (el) => LeafletUtil.handleEvent(this.zone, this.onCenterPlaced, el));
            e.layer.on('pm:dragstart', (el) => LeafletUtil.handleEvent(this.zone, this.onDragStart, el));
            e.layer.on('pm:drag', (el) => LeafletUtil.handleEvent(this.zone, this.onDrag, el));
            e.layer.on('pm:dragend', (el) => LeafletUtil.handleEvent(this.zone, this.onDragEnd, el));
            e.layer.on('pm:dragenable', (el) => LeafletUtil.handleEvent(this.zone, this.onDragEnable, el));
            e.layer.on('pm:dragdisable', (el) => LeafletUtil.handleEvent(this.zone, this.onDragDisable, el));
            e.layer.on('pm:textchange', (el) => LeafletUtil.handleEvent(this.zone, this.onTextChange, el));
            e.layer.on('pm:textfocus', (el) => LeafletUtil.handleEvent(this.zone, this.onTextFocus, el));
            e.layer.on('pm:textblur', (el) => LeafletUtil.handleEvent(this.zone, this.onTextBlur, el));
            LeafletUtil.handleEvent(this.zone, this.onCreate, e);
        });
        map.on('pm:globaleditmodetoggled', (e) => LeafletUtil.handleEvent(this.zone, this.onGlobalEditModeToggled, e));
        map.on('pm:globaldragmodetoggled', (e) => LeafletUtil.handleEvent(this.zone, this.onGlobalDragModeToggled, e));
        map.on('pm:globalremovalmodetoggled', (e) => LeafletUtil.handleEvent(this.zone, this.onGlobalRemovalModeToggled, e));
        map.on('pm:remove', (e) => LeafletUtil.handleEvent(this.zone, this.onRemove, e));
        map.on('pm:globalcutmodetoggled', (e) => LeafletUtil.handleEvent(this.zone, this.onGlobalCutModeToggled, e));
        map.on('pm:cut', (e) => LeafletUtil.handleEvent(this.zone, this.onCut, e));
        map.on('pm:globalrotatemodetoggled', (e) => LeafletUtil.handleEvent(this.zone, this.onGlobalRotateModeToggled, e));
        map.on('pm:rotateenable', (e) => LeafletUtil.handleEvent(this.zone, this.onRotateEnable, e));
        map.on('pm:rotatedisable', (e) => LeafletUtil.handleEvent(this.zone, this.onRotateDisable, e));
        map.on('pm:rotatestart', (e) => LeafletUtil.handleEvent(this.zone, this.onRotateStart, e));
        map.on('pm:rotate', (e) => LeafletUtil.handleEvent(this.zone, this.onRotate, e));
        map.on('pm:rotateend', (e) => LeafletUtil.handleEvent(this.zone, this.onRotateEnd, e));
        map.on('pm:langchange', (e) => LeafletUtil.handleEvent(this.zone, this.onLangChange, e));
        map.on('pm:buttonclick', (e) => LeafletUtil.handleEvent(this.zone, this.onButtonClick, e));
        map.on('pm:actionclick', (e) => LeafletUtil.handleEvent(this.zone, this.onActionClick, e));
        map.on('pm:keyevent', (e) => LeafletUtil.handleEvent(this.zone, this.onKeyboardKey, e));
        // Notify others that the draw control has been created
        this.geomanReady.emit(this.geomanInstance);
    }
    createControl() {
        this.geomanInstance.addControls(this.controlOptions);
    }
    ngOnDestroy() {
        this.leafletDirective.getMap().pm.removeControls();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.18", ngImport: i0, type: LeafletGeomanDirective, deps: [{ token: i1.LeafletDirective }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.18", type: LeafletGeomanDirective, isStandalone: false, selector: "[leafletGeoman]", inputs: { controlOptions: ["gmOptions", "controlOptions"], geomanTranslations: ["gmTranslation", "geomanTranslations"], geomanLocal: ["gmLocale", "geomanLocal"] }, outputs: { geomanReady: "gmReady", onGlobalDrawModeToggled: "gmGlobalDrawModeToggled", onDrawStart: "gmDrawStart", onDrawEnd: "gmDrawEnd", onCreate: "gmCreate", onVertexAdded: "gmVertexAdded", onSnap: "gmSnap", onCenterPlaced: "gmCenterPlaced", onEdit: "gmEdit", onUpdate: "gmUpdate", onEditEnable: "gmEditEnable", onEditDisable: "gmEditDisable", onVertexRemoved: "gmVertexRemoved", onVertexClick: "gmVertexClick", onMarkerDragStart: "gmMarkerDragStart", onMarkerDrag: "gmMarkerDrag", onMarkerDragEnd: "gmMarkerDragEnd", onLayerReset: "gmLayerReset", onIntersect: "gmIntersect", onChange: "gmChange", onTextChange: "gmTextChange", onTextFocus: "gmTextFocus", onTextBlur: "gmTextBlur", onGlobalEditModeToggled: "gmGlobalEditModeToggled", onGlobalDragModeToggled: "gmGlobalDragModeToggled", onDragStart: "gmDragStart", onDrag: "gmDrag", onDragEnd: "gmDragEnd", onDragEnable: "gmDragEnable", onDragDisable: "gmDragDisable", onRemove: "gmRemove", onGlobalRemovalModeToggled: "gmGlobalRemovalModeToggled", onGlobalCutModeToggled: "gmGlobalCutModeToggled", onCut: "gmCut", onRotateEnable: "gmRotateEnable", onRotateDisable: "gmRotateDisable", onRotateStart: "gmRotateStart", onRotate: "gmRotate", onRotateEnd: "gmRotateEnd", onGlobalRotateModeToggled: "gmGlobalRotateModeToggled", onLangChange: "gmLangChange", onButtonClick: "gmButtonClick", onActionClick: "gmActionClick", onKeyboardKey: "gmKeyboardKey" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.18", ngImport: i0, type: LeafletGeomanDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[leafletGeoman]',
                    standalone: false
                }]
        }], ctorParameters: () => [{ type: i1.LeafletDirective }, { type: i0.NgZone }], propDecorators: { controlOptions: [{
                type: Input,
                args: ['gmOptions']
            }], geomanTranslations: [{
                type: Input,
                args: ['gmTranslation']
            }], geomanLocal: [{
                type: Input,
                args: ['gmLocale']
            }], geomanReady: [{
                type: Output,
                args: ['gmReady']
            }], onGlobalDrawModeToggled: [{
                type: Output,
                args: ['gmGlobalDrawModeToggled']
            }], onDrawStart: [{
                type: Output,
                args: ['gmDrawStart']
            }], onDrawEnd: [{
                type: Output,
                args: ['gmDrawEnd']
            }], onCreate: [{
                type: Output,
                args: ['gmCreate']
            }], onVertexAdded: [{
                type: Output,
                args: ['gmVertexAdded']
            }], onSnap: [{
                type: Output,
                args: ['gmSnap']
            }], onCenterPlaced: [{
                type: Output,
                args: ['gmCenterPlaced']
            }], onEdit: [{
                type: Output,
                args: ['gmEdit']
            }], onUpdate: [{
                type: Output,
                args: ['gmUpdate']
            }], onEditEnable: [{
                type: Output,
                args: ['gmEditEnable']
            }], onEditDisable: [{
                type: Output,
                args: ['gmEditDisable']
            }], onVertexRemoved: [{
                type: Output,
                args: ['gmVertexRemoved']
            }], onVertexClick: [{
                type: Output,
                args: ['gmVertexClick']
            }], onMarkerDragStart: [{
                type: Output,
                args: ['gmMarkerDragStart']
            }], onMarkerDrag: [{
                type: Output,
                args: ['gmMarkerDrag']
            }], onMarkerDragEnd: [{
                type: Output,
                args: ['gmMarkerDragEnd']
            }], onLayerReset: [{
                type: Output,
                args: ['gmLayerReset']
            }], onIntersect: [{
                type: Output,
                args: ['gmIntersect']
            }], onChange: [{
                type: Output,
                args: ['gmChange']
            }], onTextChange: [{
                type: Output,
                args: ['gmTextChange']
            }], onTextFocus: [{
                type: Output,
                args: ['gmTextFocus']
            }], onTextBlur: [{
                type: Output,
                args: ['gmTextBlur']
            }], onGlobalEditModeToggled: [{
                type: Output,
                args: ['gmGlobalEditModeToggled']
            }], onGlobalDragModeToggled: [{
                type: Output,
                args: ['gmGlobalDragModeToggled']
            }], onDragStart: [{
                type: Output,
                args: ['gmDragStart']
            }], onDrag: [{
                type: Output,
                args: ['gmDrag']
            }], onDragEnd: [{
                type: Output,
                args: ['gmDragEnd']
            }], onDragEnable: [{
                type: Output,
                args: ['gmDragEnable']
            }], onDragDisable: [{
                type: Output,
                args: ['gmDragDisable']
            }], onRemove: [{
                type: Output,
                args: ['gmRemove']
            }], onGlobalRemovalModeToggled: [{
                type: Output,
                args: ['gmGlobalRemovalModeToggled']
            }], onGlobalCutModeToggled: [{
                type: Output,
                args: ['gmGlobalCutModeToggled']
            }], onCut: [{
                type: Output,
                args: ['gmCut']
            }], onRotateEnable: [{
                type: Output,
                args: ['gmRotateEnable']
            }], onRotateDisable: [{
                type: Output,
                args: ['gmRotateDisable']
            }], onRotateStart: [{
                type: Output,
                args: ['gmRotateStart']
            }], onRotate: [{
                type: Output,
                args: ['gmRotate']
            }], onRotateEnd: [{
                type: Output,
                args: ['gmRotateEnd']
            }], onGlobalRotateModeToggled: [{
                type: Output,
                args: ['gmGlobalRotateModeToggled']
            }], onLangChange: [{
                type: Output,
                args: ['gmLangChange']
            }], onButtonClick: [{
                type: Output,
                args: ['gmButtonClick']
            }], onActionClick: [{
                type: Output,
                args: ['gmActionClick']
            }], onKeyboardKey: [{
                type: Output,
                args: ['gmKeyboardKey']
            }] } });

/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://rilke.ist/license
 */
class LeafletGeomanModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.18", ngImport: i0, type: LeafletGeomanModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.18", ngImport: i0, type: LeafletGeomanModule, declarations: [LeafletGeomanDirective], imports: [LeafletModule], exports: [LeafletGeomanDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.18", ngImport: i0, type: LeafletGeomanModule, imports: [LeafletModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.18", ngImport: i0, type: LeafletGeomanModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [LeafletModule],
                    exports: [LeafletGeomanDirective],
                    declarations: [LeafletGeomanDirective],
                }]
        }] });

/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://rilke.ist/license
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LeafletGeomanDirective, LeafletGeomanModule };
//# sourceMappingURL=dvina-ngx-leaflet-geoman.mjs.map
