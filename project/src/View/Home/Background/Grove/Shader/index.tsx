import {Shaders} from '@/Component/WebGL';
import frag from './fragment';

export default Shaders.create({
  gradients: {frag}
});
