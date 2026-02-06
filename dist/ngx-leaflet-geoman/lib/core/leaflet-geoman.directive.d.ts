/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://rilke.ist/license
 */
import { EventEmitter, NgZone, OnInit } from '@angular/core';
import { GeomanEvents, PM } from 'leaflet';
import '@geoman-io/leaflet-geoman-free';
import { LeafletDirective, LeafletDirectiveWrapper } from '@bluehalo/ngx-leaflet';
import * as i0 from "@angular/core";
export declare class LeafletGeomanDirective implements OnInit {
    private zone;
    leafletDirective: LeafletDirectiveWrapper;
    geomanInstance: PM.PMMap;
    controlOptions: PM.ToolbarOptions;
    geomanTranslations: PM.Translations;
    geomanLocal: PM.SupportLocales;
    geomanReady: EventEmitter<PM.PMMap>;
    onGlobalDrawModeToggled: EventEmitter<GeomanEvents.GlobalDrawModeToggledEvent>;
    onDrawStart: EventEmitter<GeomanEvents.DrawStartEvent>;
    onDrawEnd: EventEmitter<GeomanEvents.DrawEndEvent>;
    onCreate: EventEmitter<GeomanEvents.CreateEvent>;
    onVertexAdded: EventEmitter<GeomanEvents.VertexAddedEvent>;
    onSnap: EventEmitter<GeomanEvents.SnapEvent>;
    onCenterPlaced: EventEmitter<GeomanEvents.CenterPlacedEvent>;
    onEdit: EventEmitter<GeomanEvents.EditEvent>;
    onUpdate: EventEmitter<GeomanEvents.UpdateEvent>;
    onEditEnable: EventEmitter<GeomanEvents.EditEnableEvent>;
    onEditDisable: EventEmitter<GeomanEvents.EditDisableEvent>;
    onVertexRemoved: EventEmitter<GeomanEvents.VertexRemovedEvent>;
    onVertexClick: EventEmitter<GeomanEvents.VertexClickEvent>;
    onMarkerDragStart: EventEmitter<GeomanEvents.MarkerDragStartEvent>;
    onMarkerDrag: EventEmitter<GeomanEvents.MarkerDragEvent>;
    onMarkerDragEnd: EventEmitter<GeomanEvents.MarkerDragEndEvent>;
    onLayerReset: EventEmitter<GeomanEvents.LayerResetEvent>;
    onIntersect: EventEmitter<GeomanEvents.IntersectEvent>;
    onChange: EventEmitter<GeomanEvents.ChangeEvent>;
    onTextChange: EventEmitter<GeomanEvents.TextChangeEvent>;
    onTextFocus: EventEmitter<GeomanEvents.TextFocusEvent>;
    onTextBlur: EventEmitter<GeomanEvents.TextBlurEvent>;
    onGlobalEditModeToggled: EventEmitter<GeomanEvents.GlobalEditModeToggledEvent>;
    onGlobalDragModeToggled: EventEmitter<GeomanEvents.GlobalDragModeToggledEvent>;
    onDragStart: EventEmitter<GeomanEvents.DragStartEvent>;
    onDrag: EventEmitter<GeomanEvents.DragEvent>;
    onDragEnd: EventEmitter<GeomanEvents.DragEndEvent>;
    onDragEnable: EventEmitter<GeomanEvents.DragEnableEvent>;
    onDragDisable: EventEmitter<GeomanEvents.DragDisableEvent>;
    onRemove: EventEmitter<GeomanEvents.RemoveEvent>;
    onGlobalRemovalModeToggled: EventEmitter<GeomanEvents.GlobalRemovalModeToggledEvent>;
    onGlobalCutModeToggled: EventEmitter<GeomanEvents.GlobalCutModeToggledEvent>;
    onCut: EventEmitter<GeomanEvents.CutEvent>;
    onRotateEnable: EventEmitter<GeomanEvents.RotateEnableEvent>;
    onRotateDisable: EventEmitter<GeomanEvents.RotateDisableEvent>;
    onRotateStart: EventEmitter<GeomanEvents.RotateStartEvent>;
    onRotate: EventEmitter<GeomanEvents.RotateEvent>;
    onRotateEnd: EventEmitter<GeomanEvents.RotateEndEvent>;
    onGlobalRotateModeToggled: EventEmitter<GeomanEvents.GlobalRotateModeToggledEvent>;
    onLangChange: EventEmitter<GeomanEvents.LangChangeEvent>;
    onButtonClick: EventEmitter<GeomanEvents.ButtonClickEvent>;
    onActionClick: EventEmitter<GeomanEvents.ActionClickEvent>;
    onKeyboardKey: EventEmitter<GeomanEvents.KeyboardKeyEvent>;
    constructor(leafletDirective: LeafletDirective, zone: NgZone);
    ngOnInit(): void;
    createControl(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LeafletGeomanDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LeafletGeomanDirective, "[leafletGeoman]", never, { "controlOptions": { "alias": "gmOptions"; "required": false; }; "geomanTranslations": { "alias": "gmTranslation"; "required": false; }; "geomanLocal": { "alias": "gmLocale"; "required": false; }; }, { "geomanReady": "gmReady"; "onGlobalDrawModeToggled": "gmGlobalDrawModeToggled"; "onDrawStart": "gmDrawStart"; "onDrawEnd": "gmDrawEnd"; "onCreate": "gmCreate"; "onVertexAdded": "gmVertexAdded"; "onSnap": "gmSnap"; "onCenterPlaced": "gmCenterPlaced"; "onEdit": "gmEdit"; "onUpdate": "gmUpdate"; "onEditEnable": "gmEditEnable"; "onEditDisable": "gmEditDisable"; "onVertexRemoved": "gmVertexRemoved"; "onVertexClick": "gmVertexClick"; "onMarkerDragStart": "gmMarkerDragStart"; "onMarkerDrag": "gmMarkerDrag"; "onMarkerDragEnd": "gmMarkerDragEnd"; "onLayerReset": "gmLayerReset"; "onIntersect": "gmIntersect"; "onChange": "gmChange"; "onTextChange": "gmTextChange"; "onTextFocus": "gmTextFocus"; "onTextBlur": "gmTextBlur"; "onGlobalEditModeToggled": "gmGlobalEditModeToggled"; "onGlobalDragModeToggled": "gmGlobalDragModeToggled"; "onDragStart": "gmDragStart"; "onDrag": "gmDrag"; "onDragEnd": "gmDragEnd"; "onDragEnable": "gmDragEnable"; "onDragDisable": "gmDragDisable"; "onRemove": "gmRemove"; "onGlobalRemovalModeToggled": "gmGlobalRemovalModeToggled"; "onGlobalCutModeToggled": "gmGlobalCutModeToggled"; "onCut": "gmCut"; "onRotateEnable": "gmRotateEnable"; "onRotateDisable": "gmRotateDisable"; "onRotateStart": "gmRotateStart"; "onRotate": "gmRotate"; "onRotateEnd": "gmRotateEnd"; "onGlobalRotateModeToggled": "gmGlobalRotateModeToggled"; "onLangChange": "gmLangChange"; "onButtonClick": "gmButtonClick"; "onActionClick": "gmActionClick"; "onKeyboardKey": "gmKeyboardKey"; }, never, never, false, never>;
}
