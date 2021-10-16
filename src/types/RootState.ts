// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly
import { AuthState } from 'app/pages/AuthPage/slice/types.js';
import { GlobalReducer } from 'app/commons/types';
import { SearchAction } from 'app/pages/BorrowerResultPage/slice/types';

import { HeroState } from 'app/containers/Hero/slice/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
  globalReducer?: GlobalReducer;
  authPage?: AuthState;
  searchAction: SearchAction;
  heroState?: HeroState;
}
