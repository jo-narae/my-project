<template>
  <li class="dropdown dropmenu">
    <a class="dropdown-toggle btn-rotate" data-toggle="dropdown" >
      <slot name="title">
        <i :class="icon"></i>
        <p class="notification">
          {{title}}
        </p>
        <b class="caret"></b>
      </slot>
    </a>
    <ul class="dropdown-menu">
      <slot></slot>
    </ul>
  </li>
</template>
<script>
  export default{
    props: {
      title: String,
      icon: String
    },
    data () {
      return {
      }
    },
    mounted () {
      document.onclick = this.documentClick
    },
    methods: {
      documentClick (e) {
        let dropdownSelector = $('.dropmenu')
        let dropdownItem = $('.dropdown-menu-item')
        if ((!dropdownSelector.is(e.target) && dropdownSelector.has(e.target).length === 0) || dropdownItem.is(e.target)) {
          dropdownSelector.removeClass('open')
        } else {
          dropdownSelector.addClass('open')
        }
      }
    }
  }
</script>
