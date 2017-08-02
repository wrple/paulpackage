import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {
    shallow,
    mount,
    render
} from 'enzyme';

chai.use(chaiAsPromised);
chai.use(sinonChai);

global.assert = chai.assert;
global.chai = chai;
global.expect = chai.expect;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.sinon = sinon;
