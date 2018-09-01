<template>
    <div :style="bg" class="container-fluid full-height">
        <div>

         </div>
        <div class="fixed-bottom">
            <label for="kadMa">No. kad matriks</label>
            <input v-model="profile.user_id" id="kadMa" placeholder="No kad matriks">
        </div>
        <div class="fixed-top">
            <button v-if="!toggleEditBg" class="btn btn-primary" @click="editBg">Edit background</button>
            <form v-else-if="toggleEditBg" @submit="editBg">
                <input v-model="bgTemp">
            </form>
        </div>
        <div class="innerCenter">
            <button v-if="!toggleEditProfilePicture" class="btn btn-primary" @click="editProfilePicture">Edit profile picture</button>
            <form v-else-if="toggleEditProfilePicture" @submit="editProfilePicture">
                <input v-model="profile.profile_picture">
            </form>
            <img alt="Profile picture" :src="profile.profile_picture" style="width: 80px; height: 80px;" class="profileImage">
            <div>
                <h1 style="display: inline;border-radius: 4px;">Hi, my name is <input v-model="profile.name"> and I'm from <input v-model="profile.from"></h1>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <p class="expertIn">I'm expert in:</p>
                </div>
                <div v-for="expertise in expertises"  class="col-lg-2">
                    <div class="expertise">
                        <input v-model="expertise.expertise">
                    </div>
                </div>
                <button @click="addExpertise">
                    Add
                </button>
                <button @click="submit">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import swal from 'sweetalert2'
    export default {
        props: ['backend'],
        data: function() {
            return {
                profile: {
                    name: '',
                    user_id: '',
                    from: '',
                    profile_picture: '',
                    background_url: ''
                },
                expertises: [],
                bgTemp: '',
                bg: {
                    background: '',
                },
                toggleEditBg: false,
                toggleEditName: false,
                toggleEditFrom: false,
                toggleEditProfilePicture: false
            }
        },
        methods: {
            addExpertise: function () {
                this.expertises.push({
                    expertise: ''
                })
            },
            editBg: function () {
                if (this.toggleEditBg == true) {
                    this.toggleEditBg = false
                    this.bg.background = 'url("'+this.bgTemp+'") no-repeat'
                } else {
                    this.toggleEditBg = true
                }
            },
            editProfilePicture: function () {
                if (this.toggleEditProfilePicture == true) {
                    this.toggleEditProfilePicture = false
                } else {
                    this.toggleEditProfilePicture = true
                }
            },
            submit: function () {
                axios.post(this.backend+'/api/profile', {
                    profile: {
                        user_id: this.profile.user_id,
                        name: this.profile.name,
                        background_url: this.bgTemp,
                        from: this.profile.from,
                        picture: this.profile.profile_picture
                    },
                    expertise: this.expertises
                })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        },
        mounted() {
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Condensed');

    .btn-left {
        position: absolute;
        left: 0;
        top:50%;
        bottom:50%;
        margin: auto;
        background-color: transparent!important;
        box-shadow: none!important;
        padding: 0!important;
        border: 0 !important;
    }
    .btn-right {
        position: absolute;
        right: 0;
        top:50%;
        bottom:50%;
        margin: auto;
        background-color: transparent!important;
        transform: rotate(180deg);
        box-shadow: none!important;
        padding: 0!important;
        border: 0 !important;
    }
    body {
        height: 100vh;
        font-family: 'Ubuntu Condensed', sans-serif!important;


    }
    .expertIn {
        font-size: 20px;
        margin-top: 20px;
        border-radius: 4px;
        margin-bottom: -20px;
        color: #fff;
        text-transform: uppercase;
        font-family: "Ubuntu Condensed", sans-serif!important;
        background-color: #1d2124;
        display: inline-block!important;
        padding: 3px 8px;
        transition: all 4s;
    }
    h1 {
        margin: 10px 0;
        color: #fff;
        font-weight: 700;
        font-size: 30px;
        font-family: 'Ubuntu Condensed', sans-serif;
        background-color: #1d2124;
        padding: 5px 8px;
        animation-delay:
                0s
    ;
        animation-direction:
                normal
    ;
        animation-duration:
                1.1s
    ;
        animation-fill-mode:
                none
    ;
        animation-iteration-count:
                infinite
    ;
        animation-name:
                load8
    ;
        animation-play-state:
                running
    ;
        animation-timing-function:
                linear
    ;

    }
    .profileImage {
        border-radius: 50%;
        margin-bottom: 20px;
        transition: all 2s;
    }
    .full-height {
        height: 100vh!important;
        background-size: cover!important;
        transition: all 2s;
    }
    .innerCenter {
        position: relative;
        top: 50%;
        margin: 0 auto;
        transform: translateY(-50%);
        transition: all 2s;
    }

    .expertise {
        background-color: #4267b2;
        color: #fff;
        margin: 30px 0 0 0;
        padding: 3px 8px;
        font-family: 'Ubuntu Condensed', sans-serif;
        border-radius: 4px;
        transition: all 2s;

    }
    /*.bg-cus {*/
    /*background-url: {{  }}*/
    /*}*/

</style>