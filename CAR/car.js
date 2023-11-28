AFRAME.registerComponent("car", {
    schema: {
      size: { default: 'small' }
    },
    init: function () {
      this.el.setAttribute('obj-model', {
        obj: '#carobj',
        mtl: '#carmtl'
      });
      this.el.setAttribute('rotation', { x: -90, y: 0, z: 0 });
      this.el.setAttribute('scale', { x: 0.2, y: 0.2, z: 0.2 });
    
    }
  });
  
  