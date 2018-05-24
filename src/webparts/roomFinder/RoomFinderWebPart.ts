import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './RoomFinderWebPart.module.scss';
import * as strings from 'RoomFinderWebPartStrings';
import * as BABYLON from 'babylonjs';
import Renderer from './BabylonRenderer';

export interface IRoomFinderWebPartProps {
  description: string;
}

export default class RoomFinderWebPart extends BaseClientSideWebPart<IRoomFinderWebPartProps> {

  public render(): void {
    let elementId: string = "theCanvas";
    this.domElement.innerHTML = `<canvas id='${elementId}' width='1000' height='600'></canvas>`;  

    let rend: any = new Renderer();
    rend.initialize(document.getElementById(elementId) as HTMLCanvasElement);
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
