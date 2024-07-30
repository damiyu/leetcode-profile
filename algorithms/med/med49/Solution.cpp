#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <map>
using namespace std;

/*
 * 49: Group Anagrams
 * Last Updated: Feb 9, 2024
 */
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        map<string, vector<string>> anagrams;
        vector<vector<string>> group;
        int n = strs.size();

        for (int i = 0; i < n; i++) {
            string cur_str = strs[i];

            sort(strs[i].begin(), strs[i].end());
            anagrams[strs[i]].push_back(cur_str);
        }

        map<string, vector<string>>::iterator it = anagrams.begin();
        while (it != anagrams.end()) group.push_back((it++)->second);
        return group;
    }
};

// My Original Solution
/*class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> anagrams;
        vector<string> anagram;
        int n = strs.size();
        int** char_cnts = (int**) malloc(n * sizeof(int*));

        for (int i = 0; i < n; i++) char_cnts[i] = (int*) calloc(26, sizeof(int));
        for (int i = 0; i < n; i++) {
            int l = strs[i].size();
            for (int j = 0; j < l; j++) char_cnts[i][strs[i][j] - 'a']++;
        }
        for (int i = 0; i < n; i++) {
            if (char_cnts[i][0] == -1) continue;

            anagram.push_back(strs[i]);
            for (int j = i + 1; j < n; j++) {
                bool same = true;

                for (int k = 0; k < 26; k++) {
                    if (char_cnts[i][k] != char_cnts[j][k]) {
                        same = false;
                        break;
                    }
                }

                if (same) {
                    anagram.push_back(strs[j]);
                    char_cnts[j][0] = -1;
                }
            }

            char_cnts[i][0] = -1;
            anagrams.push_back(anagram);
            anagram.clear();
        }

        for (int i = 0; i < n; i++) free(char_cnts[i]);
        free(char_cnts);
        return anagrams;
    }
};*/