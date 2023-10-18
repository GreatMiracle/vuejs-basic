<template>
  <div class="modal fade show" @dblclick="onCloseModel">
    <div class="modal-dialog">
      <div class="modal-content" :class="{'bg-purple': theme ==='example'}">
        <div class="modal-header">
          <h2>{{title}} </h2>
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer">

          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModelComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      default: "example",
      validator(value){
        return ["example", "right", "bottom"].includes(value)
      }
    },

  },

  data() {
    return {
      
    }
  },

  methods: {
    onCloseModel(){
      this.$emit("closeModel")
    }
  },
};
</script>

<style scoped>

.modal {
  position: fixed;
  top: 150;
  left: 0;
  z-index: 1060;
  display: block;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.fade {
  transition: opacity 0.15s linear;
}


.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}

.modal-dialog {
  max-width: 500px;
  margin: 1.75rem auto;
}

.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}
.bg-purple{
  background-color: #757474;
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(.3rem 1px);
  border-top-right-radius: calc(.3rem - 1px);
}

.modal-body {
  padding: 1rem;
  position: relative;
  flex: 1rem;
}

.modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem T 1px);
  border-bottom-left-radius: calc(0.3rem 1px);
}

</style>
