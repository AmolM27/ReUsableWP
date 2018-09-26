import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReUsableWpWebPartStrings';
import ReUsableWp from './components/ReUsableWp';
import { IReUsableWpProps } from './components/IReUsableWpProps';

export interface IReUsableWpWebPartProps {
  description: string;
  title: string;
}

export default class ReUsableWpWebPart extends BaseClientSideWebPart<IReUsableWpWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReUsableWpProps > = React.createElement(
      ReUsableWp,
      {
        title: this.properties.title,
        context: this.context,
        displayMode: this.displayMode,
        updateProperty: (value: string) => {
          this.properties.title = value;
        }

      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
