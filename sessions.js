    var DateTime = luxon.DateTime;

    const calend = new VanillaCalendar('#calendar-multiple-months', {
        // type: 'multiple',
        // months:2,
        popups:{
            '2023-02-28': {
                html: ' <a href="https://meet.google.com/vne-psqm-ucg">test</a>  ',
            },
            '2023-02-27': {
                modifier: 'bg-primary text-white',
                html: `<div>
				<u><b>12:00 PM</b></u>
				<p style="margin: 5px 0 0;">Airplane in Las Vegas</p>
			</div><button type="button" class="btn btn-primary">Primary</button>
            `,
            },
            '2023-02-01': {
                modifier: 'bg-secondary text-white',
                html: 'Meeting at 9:00 PM',
            },

        },
	date: {
		min: new Date().setDate(1),
    max: new DateTime.now().plus({ months: 3 }).toString(),
	},
  settings: {
    selection: {
			day: 'multiple-ranged',
      
			time: false,
      controlTime: 'all',
      stepMinutes: 15,
      dates: ['2022-08-10', '2022-08-12', '2022-08-13'],


		},
    visibility: {
        monthShort: true,
			weekend: false,
      enabled: false,
      			daysOutside: false,


		},
    iso8601:false,
		range: {
      disabled: [new DateTime.now().toISODate(),new DateTime.now().plus({ days: 2 }).toISODate()],
			min: new Date().setDate(1),
			max: new DateTime.now().plus({ months: 2 }).toString(),
		},
		selected: {
			year: 2023,
			month: 1,
      time: '03:00 PM',
		},
	},
});
    calend.init();

    // calc a min
    // calc a max
    // 