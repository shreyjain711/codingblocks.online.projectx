import Component from '@ember/component';
import { alias } from 'ember-decorators/object/computed';

export default class DocumentComponent extends Component {
  classNames = ['height-100'];
  @alias("payload") document
}
