<template>
  <transition name="modal" appear>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          
          <div class="modal-header">
            <slot name="header">
            <!-- Header Content Here -->
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
            </slot>        
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <!-- Footer Content here -->
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      sampleData : false,
    };
  },
  methods : {
    // hideContainer() {
    //   let overlay = document.getElementById('modal_wrapper_body');
    //   let container = document.getElementById('modal_container_body');
    //   console.log(overlay);
    // },
  }
};
</script>

<style lang="scss">
// @import "./src/assets/css/bizStyle.scss";

.modal-mask {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  z-index: 99999;

  .modal-wrapper {
    display: flex;
    align-items: center;
  }
}

.modal-enter-active,
.modal-leave-active {
    /* transition: opacity; */
  -webkit-transition: all 200ms cubic-bezier(0.785, 0.135, 0.150, 0.860); 
   -moz-transition: all 200ms cubic-bezier(0.785, 0.135, 0.150, 0.860); 
     -o-transition: all 200ms cubic-bezier(0.785, 0.135, 0.150, 0.860); 
        transition: all 200ms cubic-bezier(0.785, 0.135, 0.150, 0.860); /* easeInOutCirc */

-webkit-transition-timing-function: cubic-bezier(0.785, 0.135, 0.150, 0.860); 
   -moz-transition-timing-function: cubic-bezier(0.785, 0.135, 0.150, 0.860); 
     -o-transition-timing-function: cubic-bezier(0.785, 0.135, 0.150, 0.860); 
        transition-timing-function: cubic-bezier(0.785, 0.135, 0.150, 0.860); /* easeInOutCirc */
}
.modal-enter,
.modal-leave-to {
  opacity: 0; 
}

</style>