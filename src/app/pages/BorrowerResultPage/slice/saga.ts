import { takeLatest, call, all, put } from 'redux-saga/effects';
import { resultBorrowerReq as resultBorrowerAction } from './sagaActions';

import { searchResult } from 'app/apis/pawnshopSearch';
import { SearchAction } from './types';
