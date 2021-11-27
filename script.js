// function activate() {
//     $.each($('.selection'), function (i, selection) {
//         if ($(selection).hasClass('active')) {
//             $(selection).find('.fa-hand-pointer-o').addClass('d-none')
//             $(selection).find('.fa-check').removeClass('d-none')
//         }
//     })
// }

// activate();

// $('.selection').on('click', function () {
//     $("a").removeClass("active");
//     $(this).addClass("active");
//     $('.selection').find('.fa-hand-pointer-o').removeClass('d-none')
//     $('.selection').find('.fa-check').addClass('d-none')
//     activate();
//     $(".music").addClass("d-none");
//     if ($(this).hasClass('a1c')) {
//         $("#a1c").removeClass("d-none");
//     } else if ($(this).hasClass('mp')) {
//         $("#mp").removeClass("d-none");
//     } else if ($(this).hasClass('ctk')) {
//         $("#ctk").removeClass("d-none");
//     } else if ($(this).hasClass('a2c')) {
//         $("#a2c").removeClass("d-none");
//     }
//     $('audio').each(function () {
//         $(this)[0].pause()
//         $(this)[0].currentTime = 0;
//     })
// })

// $(document).on('mouseover', '.selection', function () {
//     $(this).find('.fa-hand-pointer-o').addClass('hover');
// })

// $(document).on('mouseout', '.selection', function () {
//     $(this).find('.fa-hand-pointer-o').removeClass('hover');
// })

const christmasDiv = $('.christmas.music');

const christmas = [
	{
		title: 'Christmas Song'
	},
	{
		title: 'Winter Wonderland'
	},
	{
		title: 'Let It Snow'
	},
	{
		title: 'Rudolph, the Red-Nosed Reindeer'
	},
	{
		title: 'Have Yourself a Merry Little Christmas'
	},
]








function populateTracks(track, div, folder) {
	$.each(track, (i, track) => {
		let fileName = track.title
			.replaceAll(',', '')
			.replaceAll(':', '')
			.replaceAll('!', '')
			.replaceAll("’", '')
			.replaceAll(' ', '-')
			.toLowerCase();

		const file = `./audio/${folder}/${fileName}.m4a`;
		$(div).append(`
      <div class="mb-4">
        <h4 class="ms-4 ms-sm-2">
          ${track.title}
        </h4>
        <audio controls title="${track.title}" class="audio-control mb-2">
          <source src="${file}" />
          Your browser does not support the audio element.
        </audio>
      </div>
      `);
	})
}

populateTracks(christmas, christmasDiv, 'christmas');

$('.audio-control').on("play", function () {
	$(".audio-control").not(this).each(function (index, audio) {
		audio.pause()
		audio.currentTime = 0
	});
});












