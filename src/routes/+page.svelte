<script>
	import "../app.css";
	import planeSVG from "../lib/images/paper-plane.svg";
	import NavButton from "../lib/navButton.svelte";
	import onlineFriend from "../lib/images/online-friends.png";
	import fear from "../lib/images/Stress-bro.png";
  </script>
  
  <svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
  </svelte:head>
  <section>
	<div class="flex gap-[200px]">
	  <div class="flex-wrap ">
		<h1 class="font-bold text-4xl text-myBlack">
		  Share your thoughts and <br /> distress <br /> here with someone
		</h1>
		<div class="lg:mt-9 lg:flex">
		  <NavButton text="Login Now" path="#" />
		</div>
	  </div>
	  <div>
		<img src={planeSVG} alt="" width="350px" />
	  </div>
	</div>
  </section>
  <section class="mt-20">
	<div class="flex justify-around items-center pr-10">
	  <div>
		<!-- better if change to svg -->
		<img src={onlineFriend} alt="" width="600px" />
	  </div>
	  <div>
		<h1 class="font-bold text-4xl text-myBlack flex justify-center ">
		  You are not alone
		</h1>
		<h3
		  class="text-myGray text-center font-semibold flex justify-center text-lg pt-3"
		>
		  Make friends with people <br /> all over the world
		</h3>
	  </div>
	</div>
  </section>
  <section class="mt-20">
	<div class="flex items-center justify-around">
	  <div>
		<h2 class="font-bold text-4xl text-myBlack ">
		  Sometimes all you need <br />is just to <br />speak it out
		</h2>
		<h3 class="text-myGray font-semibold text-lg pt-3">
		  Your identity won't expose to people you know
		</h3>
	  </div>
	  <div>
		<img src={fear} alt="" width="500px" />
	  </div>
	</div>
  </section>
  <section class="p-[200px]">
		<h1 class="text-5xl font-bold flex justify-center items-center ">
			Pen Pal
		</h1>
<div class="flex justify-center items-center mt-6">
	<NavButton text="Sign Up Now" path="#" />

</div>
  </section>
  