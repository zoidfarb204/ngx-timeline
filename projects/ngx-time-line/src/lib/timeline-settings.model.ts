import { ItemModel } from './item.model';

export class TimelineSettingsModel {
    inactiveColor: String = 'lightgray';
    activeColor: String = 'lightblue';
    showLabel = false;
    labelColor: String = 'lightblue';
    data: ItemModel[];
}
