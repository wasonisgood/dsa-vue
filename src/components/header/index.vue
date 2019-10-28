<template>

    <div class="header">
        <div class="sticky d-none d-lg-block">
		<nav class="navbar navbar-dark navbar-expand d-flex justify-content-between bd-navbar bar shadow">
			<div class="relative">
				<div>
					<img class="logo" style="margin-top:1vh;margin-left:5vh;" src="@/assets/LOGO.png" alt="brand">
				</div>
			</div>
			<div  id="navMiddle-container" class="">
				<ul class="navbar-nav d-flex justify-content-between">
					<li class="nav-item navMiddle ml-4">
						<router-link tag="div" to="/System">
                            <img class="icon c" src="@/assets/icon-05.png"><br>
                            系統首頁
                        </router-link>
					</li>
					<li class="nav-item mr-3 navMiddle">
						<router-link tag="div" to="/machine">
                            <img class="icon c" src="@/assets/icon-04.png"><br>
                            設備狀態
                        </router-link>
					</li>
					<li class="nav-item mr-3 navMiddle">
						<router-link tag="div" to="/analysis">
                            <img class="icon c" src="@/assets/icon-02.png"><br>
                            智能分析
                        </router-link>
					</li>
					<li class="nav-item navMiddle">
						<router-link tag="div" to="/manufacture">
                            <img class="icon c" src="@/assets/icon-03.png"><br>
                            生產管理
                        </router-link>
					</li>
					<li class="nav-item navMiddle">
						<router-link tag="div" to="/malfunction">
                            <img class="icon c" src="@/assets/icon-06.png"><br>
                            故障管理
                        </router-link>
					</li>
					<li class="nav-item navMiddle" style="margin-right:-2vh;">
						<router-link tag="div" to="/tool">
                            <img class="icon c" src="@/assets/icon-07.png"><br>
                            刀具管理
                        </router-link>
					</li>
				</ul>
			</div>
			<!--Top Menu Start -->
			<div class="navbar-custom-menu">
				<ul class="nav navbar-nav d-flex align-items-center" style="height:7vh;width:25vh;">
					<!-- Messages-->
					<li>
						<a href="#" style="">
							<img src="@/assets/icon-08.png" class="icon" alt="">
							<span class="badge bg-white badge-success badge-mini rounded-circle">2</span>
						</a>
					</li>
					<li>
						<figure class="avatar">
							<img class="userIcon" src="./user.png" alt="">
						</figure>
					</li>
					<li>
						<div style="font-weight:lighter;">USER</div>
					</li>
					<!-- User Account-->
					<li class="dropdown custom-dropdown user user-menu ">
						<a href="#" class="nav-link" data-toggle="dropdown">
							<i class="material-icons" ><img   src="@/assets/arrow.png" style="width:40px;height:40px;font-weight:lighter;" ></i>
						</a>
						<div class="dropdown-menu p-4 dropdown-menu-right">
							<div class="row box justify-content-between my-4">
								<div class="col">
									<a href="#">
										<i class="icon-apps purple lighten-2 avatar  r-5"></i>
										<div class="pt-1">Apps</div>
									</a>
								</div>
								<div class="col">
									<a href="#">
										<i class="icon-beach_access pink lighten-1 avatar  r-5"></i>
										<div class="pt-1">Profile</div>
									</a>
								</div>
								<div class="col">
									<a href="#">
										<i class="icon-perm_data_setting indigo lighten-2 avatar  r-5"></i>
										<div class="pt-1">Settings</div>
									</a>
								</div>
							</div>
							<div class="row box justify-content-between my-4">
								<div class="col">
									<a href="#">
										<i class="icon-star light-green lighten-1 avatar  r-5"></i>
										<div class="pt-1">Favourites</div>
									</a>
								</div>
								<div class="col">
									<a href="#">
										<i class="icon-save2 orange accent-1 avatar  r-5"></i>
										<div class="pt-1">Saved</div>
									</a>
								</div>
								<div class="col">
									<a href="#">
										<i class="icon-perm_data_setting grey darken-3 avatar  r-5"></i>
										<div class="pt-1">Settings</div>
									</a>
								</div>
							</div>
							<hr>
							<div class="row box justify-content-between my-4">
								<div class="col">
									<a href="#">
										<i class="icon-apps purple lighten-2 avatar  r-5"></i>
										<div class="pt-1">Apps</div>
									</a>
								</div>
								<div class="col">
									<a href="#">
										<i class="icon-beach_access pink lighten-1 avatar  r-5"></i>
										<div class="pt-1">Profile</div>
									</a>
								</div>
								<div class="col">
									<a href="#">
										<i class="icon-perm_data_setting indigo lighten-2 avatar  r-5"></i>
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
		<nav class="navbar navbar-dark navbar-expand-lg d-flex flex-column align-items-center bd-navbar bar shadow ">
			<div class="relative order-0">
				<div>
					<img class="logo" src="@/assets/LOGO.png" alt="brand">
				</div>
			</div>
			<div class="d-flex flex-row">
				<!--Top Menu Start -->
				<div class="navbar-custom-menu">
					<ul class="nav navbar-nav d-flex align-items-center">
						<!-- Messages-->
						<li>
							<a href="#">
								<img src="@/assets/icon-08.png" class="icon" alt="">
								<span class="badge badge-success badge-mini rounded-circle">4</span>
							</a>
						</li>
						<li>
							<figure class="avatar">
								<img class="userIcon" src="./assets/img/dummy/face.png" alt="">
								<span class="avatar-badge online"></span>
							</figure>
						</li>

					</ul>
				</div>
				<div class="navbar-header d-flex align-items-center">
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseToggler" aria-controls="collapseToggler" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
				</div>
			</div>
			<div  id="collapseToggler" class="collapse navbar-collapse">
				<ul class="navbar-nav d-flex justify-content-between">
					<li class="nav-item navMiddle">
						<router-link tag="div" to="/System">
                            <img class="icon" src="@/assets/icon-05.png"><br>
                            系統首頁
                        </router-link>
					</li>
					<li class="nav-item navMiddle">
						<router-link tag="div" to="/machine">
                            <img class="icon" src="@/assets/icon-04.png"><br>
                            設備狀態
                        </router-link>
					</li>
					<li class="nav-item navMiddle">
						<router-link tag="div" to="/analysis">
                            <img class="icon" src="@/assets/icon-02.png"><br>
                            智能分析
                        </router-link>
					</li>
					<li class="nav-item navMiddle">
						<router-link tag="div" to="/manufacture">
                            <img class="icon" src="@/assets/icon-03.png"><br>
                            生產管理
                        </router-link>
					</li>
					<li class="nav-item navMiddle">
						<router-link tag="div" to="/malfunction">
                            <img class="icon" src="@/assets/icon-06.png"><br>
                            故障管理
                        </router-link>
					</li>
					<li class="nav-item navMiddle">
						<router-link tag="div" to="/tool">
                            <img class="icon" src="@/assets/icon-07.png"><br>
                            刀具管理
                        </router-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
@import "assets/css/all.css";
@import "assets/css/app.css";
@import "assets/css/frameworkV2.css";
.navbar-nav {
    flex-direction: row !important;
}
.c{
	margin-bottom: 0.2rem;
}
</style>
