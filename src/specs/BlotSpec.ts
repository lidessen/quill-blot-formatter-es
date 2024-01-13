// @flow

import BlotFormatter from "../BlotFormatter";
import { ActionConstructor } from "../actions/Action";
import AlignAction from "../actions/align/AlignAction";
import ResizeAction from "../actions/ResizeAction";
import DeleteAction from "../actions/DeleteAction";

export default class BlotSpec {
	formatter: BlotFormatter;

	constructor(formatter: BlotFormatter) {
		this.formatter = formatter;
	}

	init(): void {}

	getActions(): ActionConstructor[] {
		return [AlignAction, ResizeAction, DeleteAction];
	}

	getTargetElement(): HTMLElement | null {
		return null;
	}

	getOverlayElement(): HTMLElement | null {
		return this.getTargetElement();
	}

	setSelection(): void {
		this.formatter.quill.setSelection(null);
	}

	onHide() {}
}
