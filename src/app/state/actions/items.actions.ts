import { createAction, props } from '@ngrx/store';
import { ItemModel } from 'src/app/core/models/Item.interface';

export const loadItems = createAction(
  '[Item List] Load Items'
);

export const loadedItems = createAction(
  '[Item List] Loaded successfully',
  props<{ items: ItemModel[] }>()
);
