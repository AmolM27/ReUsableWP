import * as React from 'react';
import styles from './ReUsableWp.module.scss';
import { IReUsableWpProps } from './IReUsableWpProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
import { ListPicker } from "@pnp/spfx-controls-react/lib/ListPicker";
import { SiteBreadcrumb } from "@pnp/spfx-controls-react/lib/SiteBreadcrumb";

export default class ReUsableWp extends React.Component<IReUsableWpProps, {}> {
  public render(): React.ReactElement<IReUsableWpProps> {
    return (
      <div>
        <SiteBreadcrumb context={this.props.context} />
        <WebPartTitle displayMode={this.props.displayMode}
          title={this.props.title}
          updateProperty={this.props.updateProperty} />
        <ListPicker context={this.props.context}
          label="Select your list(s)"
          placeHolder="Select your list(s)"
          baseTemplate={100}
          includeHidden={false}
          multiSelect={false}
          onSelectionChanged={this.onListPickerChange} />
      </div>
    );
  }

  private onListPickerChange(lists: string | string[]) {
    console.log("Lists:", lists);
  }
}
