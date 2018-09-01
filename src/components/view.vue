<template>
    <div :style="bg" class="container-fluid full-height">
        <div class="innerCenter">
            <img alt="Profile picture" style="width: 80px; height: 80px;" :src="profile.profile_picture" class="profileImage">
            <div>
                <h1 style="display: inline;border-radius: 4px;">Hi, my name is {{ profile.name }} and I'm from {{ profile.from }}</h1>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <p class="expertIn">I'm expert in:</p>
                </div>
                <div v-for="expertise in profile.expertise"  class="col-lg-2">
                    <div class="expertise">
                        {{ expertise.expertise }}
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-btn">
            <button  @click="decreaseProfile" class="btn-left"><img alt="navigate left" src="/left-arrow.png"></button>
            <button @click="incrementProfile" class="btn-right"><img alt="navigate left" src="/left-arrow.png"></button>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        props: ['backend'],
        data: function() {
            return {
                profiles: [],
                profile: [],
                currentProfileCount: 0,
                bg: {
                    background: '',
                }
            }
        },
        methods: {
            getProfiles: function () {
                axios.get(this.backend+'/api/profile')
                    .then(res => {
                        this.profiles = res.data.data
                        this.profile = this.profiles[this.currentProfileCount]
                        this.bg.background = 'url("'+this.profile.background_url+'") no-repeat'
                    })
            },
            incrementProfile: function () {
                this.currentProfileCount++
                this.profile = this.profiles[this.currentProfileCount]
                this.bg.background = 'url("'+this.profile.background_url+'") no-repeat'
                console.log(this.profile)
            },
            decreaseProfile: function () {
                this.currentProfileCount--
                this.profile = this.profiles[this.currentProfileCount]
                this.bg.background = 'url("'+this.profile.background_url+'") no-repeat'
                console.log(this.profile)
            }
        },
        mounted() {
            this.getProfiles()
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