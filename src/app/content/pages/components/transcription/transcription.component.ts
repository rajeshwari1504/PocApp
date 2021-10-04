import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'transcription',
	templateUrl: './transcription.component.html',
	styleUrls: ['./transcription.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TranscriptionComponent {
	constructor() { }
}
