// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import resourceCardModule from 'common/components/resourcecard/resourcecard_module';

describe('Resource card list', () => {
  /** @type {!angular.Scope} */
  let scope;
  /** @type {!angular.$compile} */
  let compile;

  beforeEach(() => {
    angular.mock.module(resourceCardModule.name);

    angular.mock.inject(($rootScope, $compile) => {
      scope = $rootScope.$new();
      compile = $compile;
    });
  });

  it('should fill the card layout', () => {
    let compileFn = compile(`
      <kd-resource-card-list>
        <kd-resource-card-header-columns>
          <kd-resource-card-header-column size="small" grow="nogrow">
            NAME_COLUMN
          </kd-resource-card-header-column>
          <kd-resource-card-header-column size="large" grow="2">
            AGE_COLUMN
          </kd-resource-card-header-column>
          <kd-resource-card-header-column>
            LABELS_COLUMN
          </kd-resource-card-header-column>
        </kd-resource-card-header-columns>
        <kd-resource-card>
          <kd-resource-card-status>STATUS</kd-resource-card-status>
            <kd-resource-card-columns>
              <kd-resource-card-column>
                FIRST_COLUMN1
              </kd-resource-card-column>
              <kd-resource-card-column>
                SECOND_COLUMN1
              </kd-resource-card-column>
              <kd-resource-card-column>
                THIRD_COLUMN1
              </kd-resource-card-column>
            </kd-resource-card-columns>
          <kd-resource-card-footer>FOOTER</kd-resource-card-footer>
        </kd-resource-card>
        <kd-resource-card>
          <kd-resource-card-status>STATUS</kd-resource-card-status>
            <kd-resource-card-columns>
              <kd-resource-card-column>
                FIRST_COLUMN2
              </kd-resource-card-column>
              <kd-resource-card-column>
                SECOND_COLUMN2
              </kd-resource-card-column>
              <kd-resource-card-column>
                THIRD_COLUMN2
              </kd-resource-card-column>
            </kd-resource-card-columns>
          <kd-resource-card-footer>FOOTER</kd-resource-card-footer>
        </kd-resource-card>
      </kd-resource-card-list>
      `);

    let elem = compileFn(scope);
    scope.$digest();

    expect(elem.html()).toContain('NAME_COLUMN');
    expect(elem.html()).toContain('AGE_COLUMN');
    expect(elem.html()).toContain('LABELS_COLUMN');
    expect(elem.html()).toContain('FIRST_COLUMN1');
    expect(elem.html()).toContain('SECOND_COLUMN1');
    expect(elem.html()).toContain('THIRD_COLUMN1');
    expect(elem.html()).toContain('FIRST_COLUMN2');
    expect(elem.html()).toContain('SECOND_COLUMN2');
    expect(elem.html()).toContain('THIRD_COLUMN2');
    expect(elem.html()).toContain('STATUS');
    expect(elem.html()).toContain('FOOTER');
  });
});
