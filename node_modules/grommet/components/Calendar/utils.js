'use strict';

exports.__esModule = true;

// Utility functions for the Calendar.
// Just what's needed to avoid having to include a dependency like momentjs.

var DAY_MILLISECONDS = 24 * 60 * 60 * 1000;

var addDays = exports.addDays = function addDays(date, days) {
  return new Date(date.getTime() + DAY_MILLISECONDS * days);
};

var subtractDays = exports.subtractDays = function subtractDays(date, days) {
  return addDays(date, -days);
};

var addMonths = exports.addMonths = function addMonths(date, months) {
  var result = new Date(date);
  var years = Math.floor((date.getMonth() + months) / 12);
  result.setFullYear(date.getFullYear() + years);
  var targetMonth = (date.getMonth() + months) % 12;
  result.setMonth(targetMonth < 0 ? 12 + targetMonth : targetMonth);
  return result;
};

var subtractMonths = exports.subtractMonths = function subtractMonths(date, months) {
  return addMonths(date, -months);
};

var sameDay = exports.sameDay = function sameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};

var sameDayOrAfter = exports.sameDayOrAfter = function sameDayOrAfter(date1, date2) {
  return date1.getFullYear() > date2.getFullYear() || date1.getFullYear() === date2.getFullYear() && (date1.getMonth() > date2.getMonth() || date1.getMonth() === date2.getMonth() && date1.getDate() >= date2.getDate());
};

var sameDayOrBefore = exports.sameDayOrBefore = function sameDayOrBefore(date1, date2) {
  return date1.getFullYear() < date2.getFullYear() || date1.getFullYear() === date2.getFullYear() && (date1.getMonth() < date2.getMonth() || date1.getMonth() === date2.getMonth() && date1.getDate() <= date2.getDate());
};

var daysApart = exports.daysApart = function daysApart(date1, date2) {
  return Math.floor((date1.getTime() - date2.getTime()) / DAY_MILLISECONDS);
};

// betweenDates takes and array of two elements and checks if the
// supplied date lies between them, inclusive.
// returns 2 if exact match to one end, 1 if between, undefined otherwise
var betweenDates = exports.betweenDates = function betweenDates(date, dates) {
  var result = void 0;
  if (dates) {
    var _dates$map = dates.map(function (d) {
      return new Date(d);
    }),
        from = _dates$map[0],
        to = _dates$map[1];

    if (sameDay(date, from) || sameDay(date, to)) {
      result = 2;
    } else if (sameDayOrAfter(date, from) && sameDayOrBefore(date, to)) {
      result = 1;
    }
  } else {
    result = 1;
  }
  return result;
};

// withinDates takes and array of string dates or 2 element arrays and
// checks whether the supplied date matches any string or is between
// any dates in arrays.
// returns 2 if exact match, 1 if between, undefined otherwise
var withinDates = exports.withinDates = function withinDates(date, dates) {
  var result = void 0;
  if (dates) {
    if (Array.isArray(dates)) {
      dates.some(function (d) {
        if (typeof d === 'string') {
          if (sameDay(date, new Date(d))) {
            result = 2;
          }
        } else {
          result = betweenDates(date, d);
        }
        return result;
      });
    } else if (sameDay(date, new Date(dates))) {
      result = 2;
    }
  }
  return result;
};