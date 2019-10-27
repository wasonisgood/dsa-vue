<template>
    <div>
        <div class="sticky d-none d-lg-block">
            <nav class="navbar navbar-dark navbar-expand d-flex justify-content-between bd-navbar bar shadow">
                <div class="relative">
                    <div>
                        <img class="logo" src="@/assets/header/img/LOGO.png" alt="brand" />
                    </div>
                </div>
                <div id="navMiddle-container" class="mr-4">
                    <ul class="navbar-nav d-flex justify-content-between">
                        <li class="nav-item navMiddle">
                            <router-link tag="a" to="/System">
                                <img src="@/assets/header/img/icon-05.png" class="icon" alt="" />
                            </router-link>
                            <br />
                            <router-link tag="a" to="/System">
                                <span>系統首頁</span>
                            </router-link>
                        </li>
                        <li class="nav-item navMiddle">
                            <router-link tag="a" to="/machine">
                                <img src="@/assets/header/img/icon-04.png" class="icon" alt="" />
                            </router-link>
                            <br />
                            <router-link tag="a" to="/machine">
                                <span>設備狀態</span>
                            </router-link>
                        </li>
                        <li class="nav-item navMiddle">
                            <router-link tag="a" to="/analysis">
                                <img src="@/assets/header/img/icon-02.png" class="icon" alt="" />
                            </router-link>
                            <br />
                            <router-link tag="a" to="/analysis">
                                <span>智能分析</span>
                            </router-link>
                        </li>
                        <li class="nav-item navMiddle">
                            <router-link tag="a" to="/manufacture">
                                <img src="@/assets/header/img/icon-03.png" class="icon" alt="" />
                            </router-link>
                            <br />
                            <router-link tag="a" to="/manufacture">
                                <span>生產管理</span>
                            </router-link>
                        </li>
                        <li class="nav-item navMiddle">
                            <router-link tag="a" to="/malfunction">
                                <img src="@/assets/header/img/icon-06.png" class="icon" alt="" />
                            </router-link>
                            <br />
                            <router-link tag="a" to="/malfunction">
                                <span>故障管理</span>
                            </router-link>
                        </li>
                        <li class="nav-item navMiddle">
                            <router-link tag="a" to="/tool">
                                <img src="@/assets/header/img/icon-07.png" class="icon" alt="" />
                            </router-link>
                            <br />
                            <router-link tag="a" to="/tool">
                                <span>刀具管理</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!--Top Menu Start -->
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav d-flex align-items-center">
                        <!-- Messages-->
                        <li>
                            <a href="#">
                                <img src="@/assets/header/img/icon-08.png" class="icon" alt="" />
                                <span class="badge badge-success badge-mini rounded-circle">4</span>
                            </a>
                        </li>
                        <li>
                            <figure class="avatar">
                                <img width="50" class="userIcon" src="@/assets/header/img/member.png" alt="" />
                                <span class="avatar-badge online"></span>
                            </figure>
                        </li>
                        <li style="width: auto;">
                            <span style="font-size: 1.1rem">USER</span>
                        </li>
                        <!-- User Account-->
                        <li style="width: 1rem;">
                            <a href="#" class="nav-link" data-toggle="dropdown">
                                <i class="material-icons">keyboard_arrow_down</i>
                            </a>
                        </li>
                        <li class="dropdown custom-dropdown user user-menu">
                            <div class="dropdown-menu p-4 dropdown-menu-right">
                                <div class="row box justify-content-between my-4">
                                    <div class="col">
                                        <a href="#">
                                            <i class="icon-apps purple lighten-2 avatar r-5"></i>
                                            <div class="pt-1">Apps</div>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="#">
                                            <i class="icon-beach_access pink lighten-1 avatar r-5"></i>
                                            <div class="pt-1">Profile</div>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="#">
                                            <i class="icon-perm_data_setting indigo lighten-2 avatar r-5"></i>
                                            <div class="pt-1">Settings</div>
                                        </a>
                                    </div>
                                </div>
                                <div class="row box justify-content-between my-4">
                                    <div class="col">
                                        <a href="#">
                                            <i class="icon-star light-green lighten-1 avatar r-5"></i>
                                            <div class="pt-1">Favourites</div>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="#">
                                            <i class="icon-save2 orange accent-1 avatar r-5"></i>
                                            <div class="pt-1">Saved</div>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="#">
                                            <i class="icon-perm_data_setting grey darken-3 avatar r-5"></i>
                                            <div class="pt-1">Settings</div>
                                        </a>
                                    </div>
                                </div>
                                <hr />
                                <div class="row box justify-content-between my-4">
                                    <div class="col">
                                        <a href="#">
                                            <i class="icon-apps purple lighten-2 avatar r-5"></i>
                                            <div class="pt-1">Apps</div>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="#">
                                            <i class="icon-beach_access pink lighten-1 avatar r-5"></i>
                                            <div class="pt-1">Profile</div>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="#">
                                            <i class="icon-perm_data_setting indigo lighten-2 avatar r-5"></i>
                                            <div class="pt-1">Settings</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <!-- mobile device -->
        <div class="sticky d-block d-lg-none">
            <nav class="navbar navbar-dark navbar-expand-lg d-flex flex-column align-items-center bd-navbar bar shadow">
                <div class="d-flex justify-content-between w-100">
                    <img class="logo" src="@/assets/header/img/LOGO.png" alt="brand" />
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseToggler" aria-controls="collapseToggler" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div id="collapseToggler" class="collapse navbar-collapse" style="z-index: 2;">
                    <div class="navbar-bg"></div>
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item nav-member">
                            <a href="#" class="nav-member-title">
                                <img src="@/assets/header/img/member-phone.png" class="icon ml-0" width="60" alt="" />USER
                            </a>
                        </li>
                        <li class="nav-item">                            
                            <router-link tag="a" to="/machine">
                                <img class="icon" src="@/assets/header/img/icon-04-phone.png" width="30" />設備狀態
                            </router-link>
                        </li>
                        <li class="nav-item">           
                            <router-link tag="a" to="/analysis">
                                <img class="icon" src="@/assets/header/img/icon-02-phone.png" width="30" />智能分析
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link tag="a" to="/manufacture">
                                <img class="icon" src="@/assets/header/img/icon-03-phone.png" width="30" />生產管理
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link tag="a" to="/malfunction">
                                <img class="icon" src="@/assets/header/img/icon-06-phone.png" width="30" />故障管理
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link tag="a" to="/tool">
                                <img src="@/assets/header/img/icon-07-phone.png" class="icon" width="30" alt="" />刀具管理
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link tag="a" to="">
                                <img class="icon" src="@/assets/header/img/icon-08-phone.png" width="30" />您的信箱
                            </router-link>
                        </li>
                        <hr />
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style>
@import url("../../assets/css/frameworkV2.css");
@import url("../../assets/css/icon.css");
</style>
