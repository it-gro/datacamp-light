!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("lodash")))
    : "function" == typeof define && define.amd
      ? define(["lodash"], t)
      : "object" == typeof exports
        ? (exports.DCLanguagesConfig = t(require("lodash")))
        : (e.DCLanguagesConfig = t(e.lodash));
})(this, function(e) {
  return (function(e) {
    function t(n) {
      if (o[n]) return o[n].exports;
      var r = (o[n] = { exports: {}, id: n, loaded: !1 });
      return e[n].call(r.exports, r, r.exports, t), (r.loaded = !0), r.exports;
    }
    var o = {};
    return (t.m = e), (t.c = o), (t.p = ""), t(0);
  })([
    function(e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mapLanguageName = t.getAutoCompletionConfig = t.getAutoCompletionRules = t.getMCCommand = t.getConsoleTitle = t.getTabTitle = void 0);
      var n = o(1),
        r = {
          revo: {
            mode: "r",
            name: "Revo",
            prompt: function() {
              return "> ";
            },
            promptToken: "operator.keyword",
            outputLabel: function() {
              return "";
            },
            newlineBeforePrompt: !1,
            extension: "R",
            console: "R Console",
            editorPrefixTitle: "script",
            responseRegex: /\[1\] "(.*)"\r?\n/g,
            mcCommand: "DM.result = {selection}",
            completerIgnoreRegexArr: [/#.*/g],
            breakLine: "+ ",
            autoCompleter: {
              rules: n.rAutoCompletionRules,
              identifierRegexps: [/[a-zA-Z0-9_\@\.:\$?\-\u00A2-\uFFFF]/],
            },
            hasCompleter: !0,
            tabSize: 2,
          },
          r: {
            mode: "r",
            name: "R",
            prompt: function() {
              return "> ";
            },
            promptToken: "operator.keyword",
            outputLabel: function() {
              return "";
            },
            newlineBeforePrompt: !1,
            extension: "R",
            editorPrefixTitle: "script",
            console: "R Console",
            responseRegex: /\[1\] "(.*)"\r?\n/g,
            mcCommand: "DM.result = {selection}",
            completerIgnoreRegexArr: [/#.*/g],
            breakLine: "+ ",
            autoCompleter: {
              rules: n.rAutoCompletionRules,
              identifierRegexps: [/[a-zA-Z0-9_\@\.:\$\?\-\u00A2-\uFFFF]/],
            },
            hasCompleter: !0,
            tabSize: 2,
          },
          python: {
            mode: "python",
            name: "Python",
            prompt: function(e) {
              return "In [" + e + "]: ";
            },
            promptRegex: /^(In |Out)\[\d+\]: /,
            promptToken: "identifier",
            newlineBeforePrompt: !0,
            outputLabel: function(e) {
              return "Out[" + e + "]: ";
            },
            extension: "py",
            editorPrefixTitle: "script",
            console: "IPython Shell",
            responseRegex: /\"(.*)\"\r?\n/g,
            mcCommand: "selected_option = {selection}",
            completerIgnoreRegexArr: [/#.*/g],
            breakLine: "... ",
            hasCompleter: !0,
            autoCompleter: {
              rules: n.pythonAutoCompletionRules,
              identifierRegexps: [/[a-zA-Z0-9_\.\-%\u00A2-\uFFFF]/],
            },
            tabSize: 4,
          },
          sql: {
            mode: "sql",
            name: "SQL",
            prompt: function() {
              return "";
            },
            extension: "sql",
            editorPrefixTitle: "query",
            responseRegex: /\"(.*)\"\r?\n/g,
            mcCommand: "selected_option = {selection}",
            tabSize: 4,
          },
          shell: {
            mode: "sh",
            name: "Shell",
            prompt: function(e, t) {
              return t + " $ ";
            },
            promptRegex: /^(In |Out)\[\d+\]: /,
            promptToken: "identifier",
            newlineBeforePrompt: !1,
            outputLabel: function() {
              return "";
            },
            extension: "sh",
            editorPrefixTitle: "script",
            console: "Terminal",
            responseRegex: /\"(.*)\"\r?\n/g,
            mcCommand: "selected_option = {selection}",
            completerIgnoreRegexArr: [/#.*/g],
            breakLine: "... ",
            hasCompleter: !1,
            tabSize: 4,
          },
        };
      (t.default = r),
        (t.getTabTitle = function(e, t, o) {
          return r[t]
            ? e + "." + ("RCppExercise" === o ? "cpp" : r[t].extension)
            : e;
        }),
        (t.getConsoleTitle = function(e) {
          return r[e] ? r[e].console : "console";
        }),
        (t.getMCCommand = function(e, t) {
          return r[e].mcCommand.replace("{selection}", t);
        }),
        (t.getAutoCompletionRules = function(e) {
          return r[e].autoCompleter.rules;
        }),
        (t.getAutoCompletionConfig = function(e) {
          return r[e].autoCompleter;
        }),
        (t.mapLanguageName = function(e) {
          var t = (e || "r").toLowerCase();
          switch (t) {
            case "revolution":
              return "revo";
            case "python 3":
              return "python";
            default:
              return t;
          }
        });
    },
    function(e, t, o) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.pythonAutoCompletionRules = t.rAutoCompletionRules = void 0);
      var r = o(2),
        i = n(r),
        u = function(e) {
          var t = e;
          if (/^[a-zA-Z0-9_\-\.]+=$/.test(e)) {
            var o = e.split("=");
            t = o[0] + " = ";
          }
          return t;
        },
        s = (t.rAutoCompletionRules = {
          isPackageCompletion: function(e) {
            return /[a-z0-9\.\-\_]+:::?[a-z0-9\.\-\_]*$/i.test(e);
          },
          isFunctionArugmentCompletion: function(e) {
            return /[a-z0-9]+\s*\((\s*("|')?\s*[a-z0-9\.\-\_]*\s*("|')?\s*(,|=)?)*$/i.test(
              e
            );
          },
          isFunctionNamedArgumentValue: function(e) {
            return /[a-z0-9\.\-\_]+=[a-z0-9\.\-\_]*$/i.test(e);
          },
          isHelpCompletion: function(e) {
            return /^\s*\?[a-z0-9\.\-\_]*$/i.test(e);
          },
          isListDataframeVariable: function(e) {
            return /[a-z0-9\.\-\_]+\$[a-z0-9\.\-\_]*$/i.test(e);
          },
          getPrefix: function(e, t) {
            return (
              e.length > t && (e = e.substring(0, t)),
              s.isPackageCompletion(e)
                ? e.match(/[a-z0-9\.\-\_]+:::?[a-z0-9\.\-\_]*$/i)[0]
                : s.isFunctionArugmentCompletion(e)
                  ? s.isFunctionNamedArgumentValue(e)
                    ? e.match(/[a-z0-9\.\-\_]*$/i)[0]
                    : e
                  : s.isListDataframeVariable(e)
                    ? e.match(/[a-z0-9\.\-\_]+\$[a-z0-9\.\-\_]*$/i)[0]
                    : e
            );
          },
          getCompletionConfigObj: function(e, t, o) {
            if (0 !== e.length) return { prefix: e, cursorPosition: e.length };
            var n = s.getPrefix(t, o.column);
            return 0 !== n.length && { prefix: n, cursorPosition: n.length };
          },
          mapToAceCompletionList: function(e) {
            var t = [];
            if (i.default.isArray(e.comps))
              t = e.comps.map(function(t, o, n) {
                t = u(t);
                var r = e.packages[o] ? "{" + e.packages[o] + "}" : "",
                  i = e.scores[o] ? e.scores[o] : 0,
                  s = e.types[o] ? e.types[o] : "";
                return { name: t, value: t, score: i, meta: r, type: s };
              });
            else if (i.default.isString(e.comps)) {
              var o = u(e.comps);
              t.push({ name: o, value: o, meta: e.packages, type: e.types });
            }
            return t;
          },
        }),
        a = (t.pythonAutoCompletionRules = {
          promptRegex: /^(In |Out)\[\d+\]: /,
          getPrefix: function(e, t) {
            return e.replace(a.promptRegex, "");
          },
          resultParsingCorrectness: function(e, t, o) {
            return o;
          },
          getCompletionConfigObj: function(e, t, o) {
            t = t.substring(0, o.column);
            var n = a.getPrefix(t, e.length);
            return { prefix: n, cursorPosition: n.length };
          },
          mapToAceCompletionList: function(e) {
            return e.map(function(e, t, o) {
              return { value: e.completion, meta: e.module, score: e.score };
            });
          },
        });
    },
    function(t, o) {
      t.exports = e;
    },
  ]);
});
