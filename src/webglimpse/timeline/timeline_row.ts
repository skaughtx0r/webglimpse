/*
 * Copyright (c) 2014, Metron, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
import { Color } from '../color';
import { PointerEvent, Drawable, Pane } from '../core';
import { TimeAxis1D } from './time_axis';
import { Axis1D } from '../plot/axis';
import { TimelineModel, TimelineRowModel } from './timeline_model';
import { TimelineUi } from './timeline_ui';

export interface TimelineRowPaneOptions {
    timelineFont: string;
    timelineFgColor: Color;
    draggableEdgeWidth: number;
    snapToDistance: number;
    isMaximized: boolean;
    mouseWheelListener?: (PointerEvent: PointerEvent) => void;
}

export type TimelineRowPaneFactory = (drawable: Drawable,
        timeAxis: TimeAxis1D,
        dataAxis: Axis1D,
        model: TimelineModel,
        row: TimelineRowModel,
        ui: TimelineUi,
        options: TimelineRowPaneOptions) => Pane;

export type TimelineRowPaneFactoryChooser = (row: TimelineRowModel) => TimelineRowPaneFactory;
