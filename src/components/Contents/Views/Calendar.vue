<template>
  <div class="row">
    <div class="col-lg-2 col-md-3">
      <job-list>

      </job-list>
    </div>
    <div class="col-lg-10 col-md-9">
      <edit-profile-form>

      </edit-profile-form>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import JobList from './Calendar/JobList.vue'
  export default {
    components: {
      EditProfileForm,
      JobList,
      MembersCard
    }
  }

</script>
<style>

</style>
