"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Check, ChevronRight, ChevronDown, FileCode2 } from 'lucide-react';
import { dsaSolutions } from './solutions';
import { highlightCode } from './actions';

const COLORS: Record<string, string> = {
  'Array': '#1D9E75', 'HashMap': '#7F77DD', 'Stack': '#D85A30', 'Sliding Window': '#BA7517',
  'Binary Search': '#378ADD', 'Linked List': '#D4537E', 'Tree': '#639922', 'Graph': '#5F5E5A',
  'DP': '#993556', 'String': '#185FA5', 'Heap': '#3B6D11', 'Recursion': '#854F0B'
};

type Question = {
  q: string;
  d: 'Easy' | 'Medium' | 'Hard';
  p: string;
  c: string[];
};

const questions: Question[] = [
  { q: 'Two Sum', d: 'Easy', p: 'HashMap', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Group Anagrams', d: 'Medium', p: 'HashMap', c: ['Amazon', 'Google'] },
  { q: 'Top K Frequent Elements', d: 'Medium', p: 'HashMap', c: ['Amazon', 'Facebook'] },
  { q: 'Longest Consecutive Sequence', d: 'Medium', p: 'HashMap', c: ['Google', 'Facebook'] },
  { q: 'Valid Anagram', d: 'Easy', p: 'HashMap', c: ['Amazon', 'Microsoft'] },
  { q: 'Contains Duplicate', d: 'Easy', p: 'HashMap', c: ['Amazon', 'Apple'] },
  { q: 'Best Time to Buy & Sell Stock', d: 'Easy', p: 'Array', c: ['Amazon', 'Google', 'Microsoft'] },
  { q: 'Product of Array Except Self', d: 'Medium', p: 'Array', c: ['Amazon', 'Facebook', 'Apple'] },
  { q: 'Maximum Subarray (Kadane)', d: 'Medium', p: 'Array', c: ['Amazon', 'Google', 'Microsoft'] },
  { q: 'Container With Most Water', d: 'Medium', p: 'Array', c: ['Amazon', 'Google'] },
  { q: '3Sum', d: 'Medium', p: 'Array', c: ['Amazon', 'Facebook', 'Google'] },
  { q: 'Trapping Rain Water', d: 'Hard', p: 'Array', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Rotate Array', d: 'Medium', p: 'Array', c: ['Amazon', 'Microsoft'] },
  { q: 'Find Minimum in Rotated Array', d: 'Medium', p: 'Binary Search', c: ['Amazon', 'Google'] },
  { q: 'Search in Rotated Sorted Array', d: 'Medium', p: 'Binary Search', c: ['Amazon', 'Facebook'] },
  { q: 'Binary Search', d: 'Easy', p: 'Binary Search', c: ['Amazon', 'Google', 'Microsoft'] },
  { q: 'Koko Eating Bananas', d: 'Medium', p: 'Binary Search', c: ['Amazon', 'Google'] },
  { q: 'Median of Two Sorted Arrays', d: 'Hard', p: 'Binary Search', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Valid Parentheses', d: 'Easy', p: 'Stack', c: ['Amazon', 'Google', 'Microsoft'] },
  { q: 'Min Stack', d: 'Medium', p: 'Stack', c: ['Amazon', 'Google'] },
  { q: 'Daily Temperatures', d: 'Medium', p: 'Stack', c: ['Amazon', 'Google'] },
  { q: 'Largest Rectangle in Histogram', d: 'Hard', p: 'Stack', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Car Fleet', d: 'Medium', p: 'Stack', c: ['Amazon'] },
  { q: 'Evaluate Reverse Polish Notation', d: 'Medium', p: 'Stack', c: ['Amazon', 'Microsoft'] },
  { q: 'Longest Substring Without Repeating', d: 'Medium', p: 'Sliding Window', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Minimum Window Substring', d: 'Hard', p: 'Sliding Window', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Permutation in String', d: 'Medium', p: 'Sliding Window', c: ['Amazon', 'Google'] },
  { q: 'Sliding Window Maximum', d: 'Hard', p: 'Sliding Window', c: ['Amazon', 'Google'] },
  { q: 'Longest Repeating Character Replacement', d: 'Medium', p: 'Sliding Window', c: ['Amazon', 'Google'] },
  { q: 'Reverse Linked List', d: 'Easy', p: 'Linked List', c: ['Amazon', 'Google', 'Microsoft'] },
  { q: 'Merge Two Sorted Lists', d: 'Easy', p: 'Linked List', c: ['Amazon', 'Google'] },
  { q: 'Linked List Cycle', d: 'Easy', p: 'Linked List', c: ['Amazon', 'Microsoft', 'Flipkart'] },
  { q: 'Reorder List', d: 'Medium', p: 'Linked List', c: ['Amazon', 'Google'] },
  { q: 'Remove Nth Node From End', d: 'Medium', p: 'Linked List', c: ['Amazon', 'Google', 'Flipkart'] },
  { q: 'LRU Cache', d: 'Medium', p: 'Linked List', c: ['Amazon', 'Google', 'Facebook', 'Walmart'] },
  { q: 'Copy List With Random Pointer', d: 'Medium', p: 'Linked List', c: ['Amazon', 'Google'] },
  { q: 'Find the Duplicate Number', d: 'Medium', p: 'Linked List', c: ['Amazon', 'Facebook'] },
  { q: 'Invert Binary Tree', d: 'Easy', p: 'Tree', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Maximum Depth of Binary Tree', d: 'Easy', p: 'Tree', c: ['Amazon', 'Google'] },
  { q: 'Same Tree', d: 'Easy', p: 'Tree', c: ['Amazon', 'Google'] },
  { q: 'Binary Tree Level Order Traversal', d: 'Medium', p: 'Tree', c: ['Amazon', 'Google', 'Walmart'] },
  { q: 'Validate BST', d: 'Medium', p: 'Tree', c: ['Amazon', 'Google', 'Microsoft'] },
  { q: 'Kth Smallest in BST', d: 'Medium', p: 'Tree', c: ['Amazon', 'Google'] },
  { q: 'LCA of Binary Tree', d: 'Medium', p: 'Tree', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Binary Tree Right Side View', d: 'Medium', p: 'Tree', c: ['Amazon', 'Facebook'] },
  { q: 'Construct Tree from Pre+In order', d: 'Medium', p: 'Tree', c: ['Amazon', 'Google'] },
  { q: 'Diameter of Binary Tree', d: 'Easy', p: 'Tree', c: ['Amazon', 'Facebook', 'Flipkart'] },
  { q: 'Serialize and Deserialize Tree', d: 'Hard', p: 'Tree', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Number of Islands', d: 'Medium', p: 'Graph', c: ['Amazon', 'Google', 'Facebook', 'Walmart'] },
  { q: 'Clone Graph', d: 'Medium', p: 'Graph', c: ['Amazon', 'Google'] },
  { q: 'Pacific Atlantic Water Flow', d: 'Medium', p: 'Graph', c: ['Amazon', 'Google'] },
  { q: 'Course Schedule (Topo Sort)', d: 'Medium', p: 'Graph', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Word Ladder', d: 'Hard', p: 'Graph', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Surrounded Regions', d: 'Medium', p: 'Graph', c: ['Amazon', 'Google'] },
  { q: 'Rotting Oranges', d: 'Medium', p: 'Graph', c: ['Amazon', 'Google', 'Flipkart'] },
  { q: 'Find Median from Data Stream', d: 'Hard', p: 'Heap', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Top K Frequent Words', d: 'Medium', p: 'Heap', c: ['Amazon', 'Google'] },
  { q: 'Kth Largest Element', d: 'Medium', p: 'Heap', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Task Scheduler', d: 'Medium', p: 'Heap', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Merge K Sorted Lists', d: 'Hard', p: 'Heap', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Climbing Stairs', d: 'Easy', p: 'DP', c: ['Amazon', 'Google', 'Microsoft'] },
  { q: 'House Robber', d: 'Medium', p: 'DP', c: ['Amazon', 'Google'] },
  { q: 'Coin Change', d: 'Medium', p: 'DP', c: ['Amazon', 'Google', 'Facebook', 'Flipkart'] },
  { q: 'Longest Common Subsequence', d: 'Medium', p: 'DP', c: ['Amazon', 'Google', 'Walmart'] },
  { q: 'Word Break', d: 'Medium', p: 'DP', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Unique Paths', d: 'Medium', p: 'DP', c: ['Amazon', 'Google'] },
  { q: 'Longest Increasing Subsequence', d: 'Medium', p: 'DP', c: ['Amazon', 'Google', 'Flipkart'] },
  { q: 'Edit Distance', d: 'Hard', p: 'DP', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Partition Equal Subset Sum', d: 'Medium', p: 'DP', c: ['Amazon', 'Google'] },
  { q: 'Valid Palindrome', d: 'Easy', p: 'String', c: ['Amazon', 'Facebook', 'Microsoft'] },
  { q: 'Longest Palindromic Substring', d: 'Medium', p: 'String', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Encode & Decode Strings', d: 'Medium', p: 'String', c: ['Google', 'Facebook'] },
  { q: 'Find All Anagrams in String', d: 'Medium', p: 'String', c: ['Amazon', 'Facebook'] },
  { q: 'Generate Parentheses', d: 'Medium', p: 'Recursion', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Subsets', d: 'Medium', p: 'Recursion', c: ['Amazon', 'Google'] },
  { q: 'Combination Sum', d: 'Medium', p: 'Recursion', c: ['Amazon', 'Google', 'Flipkart'] },
  { q: 'Permutations', d: 'Medium', p: 'Recursion', c: ['Amazon', 'Google', 'Facebook'] },
  { q: 'Word Search', d: 'Medium', p: 'Recursion', c: ['Amazon', 'Google', 'Microsoft'] },
];

const patterns = Array.from(new Set(questions.map(q => q.p)));

export default function DSAPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'explanation' | 'js' | 'python'>('explanation');

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('dsa_checked');
    if (saved) {
      try {
        setChecked(JSON.parse(saved));
      } catch (e) { }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('dsa_checked', JSON.stringify(checked));
    }
  }, [checked, mounted]);

  const toggleCheck = (id: string) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalQuestions = questions.length;
  const doneCount = Object.values(checked).filter(Boolean).length;
  const easyCount = questions.filter(q => q.d === 'Easy').length;
  const mediumCount = questions.filter(q => q.d === 'Medium').length;
  const hardCount = questions.filter(q => q.d === 'Hard').length;
  const progressPercent = Math.round((doneCount / totalQuestions) * 100) || 0;

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchFilter = activeFilter === 'all' || q.p === activeFilter;
      const matchSearch = q.q.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    });
  }, [activeFilter, search]);

  const questionsByPattern = useMemo(() => {
    const grouped: Record<string, Question[]> = {};
    filteredQuestions.forEach(q => {
      if (!grouped[q.p]) grouped[q.p] = [];
      grouped[q.p].push(q);
    });
    return grouped;
  }, [filteredQuestions]);

  const diffColors = {
    Easy: 'bg-green-100/50 text-green-700 dark:bg-green-500/10 dark:text-green-400',
    Medium: 'bg-yellow-100/50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400',
    Hard: 'bg-red-100/50 text-red-700 dark:bg-red-500/10 dark:text-red-400'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">DSA Question Bank</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-muted/30 border border-border rounded-xl p-4">
          <div className="text-3xl font-semibold">{totalQuestions}</div>
          <div className="text-sm text-muted-foreground mt-1">Total questions</div>
        </div>
        <div className="bg-muted/30 border border-border rounded-xl p-4">
          <div className="text-3xl font-semibold text-green-600 dark:text-green-500">{mediumCount}</div>
          <div className="text-sm text-muted-foreground mt-1">Medium</div>
        </div>
        <div className="bg-muted/30 border border-border rounded-xl p-4">
          <div className="text-3xl font-semibold text-green-600 dark:text-green-500">{easyCount}</div>
          <div className="text-sm text-muted-foreground mt-1">Easy</div>
        </div>
        <div className="bg-muted/30 border border-border rounded-xl p-4">
          <div className="text-3xl font-semibold text-red-600 dark:text-red-500">{hardCount}</div>
          <div className="text-sm text-muted-foreground mt-1">Hard</div>
        </div>
      </div>

      {/* Progress */}
      {/* <div className="h-2 bg-muted rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-500 ease-out"
          style={{ width: `${mounted ? progressPercent : 0}%` }}
        />
      </div> */}

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${activeFilter === 'all' ? 'bg-foreground text-background border-foreground' : 'bg-background text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground'}`}
        >
          All
        </button>
        {patterns.map(p => (
          <button
            key={p}
            onClick={() => setActiveFilter(p)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${activeFilter === p ? 'bg-foreground text-background border-foreground' : 'bg-background text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground'}`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Sections */}
      <div className="space-y-12">
        {patterns.map(p => {
          const sectionQuestions = questionsByPattern[p];
          if (!sectionQuestions || sectionQuestions.length === 0) return null;

          return (
            <div key={p} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 mb-4 pb-2 border-b border-border">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: COLORS[p] || '#888' }} />
                <h2 className="text-lg font-semibold">{p}</h2>
                <span className="text-sm text-muted-foreground ml-auto">{sectionQuestions.length} questions</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="text-muted-foreground border-b border-border">
                      <th className="px-4 py-3 font-medium w-[40%]">Question</th>
                      <th className="px-4 py-3 font-medium w-[10%]">Difficulty</th>
                      <th className="px-4 py-3 font-medium w-[15%] hidden sm:table-cell">Pattern</th>
                      <th className="px-4 py-3 font-medium w-[25%] hidden md:table-cell">Asked at</th>
                      {/* <th className="px-4 py-3 font-medium w-[10%] text-center">Done</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {sectionQuestions.map((q) => {
                      const qId = q.q.replace(/\s+/g, '-').toLowerCase();
                      const isChecked = mounted && !!checked[qId];
                      const isExpanded = expandedQuestion === qId;
                      const hasSolution = dsaSolutions[qId] !== undefined;

                      return (
                        <React.Fragment key={q.q}>
                          <tr 
                            onClick={() => setExpandedQuestion(isExpanded ? null : qId)}
                            className="border-b last:border-0 border-border hover:bg-muted/30 transition-colors cursor-pointer group"
                          >
                            <td className="px-4 py-3.5 font-medium flex items-center h-full min-h-[44px]">
                              {isExpanded ? 
                                <ChevronDown className="w-4 h-4 mr-2 text-muted-foreground group-hover:text-foreground transition-colors" /> : 
                                <ChevronRight className="w-4 h-4 mr-2 text-muted-foreground group-hover:text-foreground transition-colors" />
                              }
                              {q.q}
                              {hasSolution && (
                                <span className="ml-3 px-1.5 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] uppercase font-bold tracking-wider">
                                  Solution
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-3.5">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${diffColors[q.d]}`}>
                                {q.d}
                              </span>
                            </td>
                            <td className="px-4 py-3.5 hidden sm:table-cell" style={{ color: COLORS[q.p] || '#888' }}>
                              {q.p}
                            </td>
                            <td className="px-4 py-3.5 hidden md:table-cell">
                              <div className="flex flex-wrap gap-1.5">
                                {q.c.map(c => (
                                  <span key={c} className="inline-block px-1.5 py-0.5 rounded text-[11px] bg-muted text-muted-foreground">
                                    {c}
                                  </span>
                                ))}
                              </div>
                            </td>
                          </tr>
                          {isExpanded && (
                            <tr>
                              <td colSpan={4} className="p-0 border-b border-border bg-muted/10">
                                <div className="p-6 animate-in slide-in-from-top-2 fade-in duration-200">
                                  {hasSolution ? (
                                    <div className="rounded-xl border border-border bg-background shadow-sm overflow-hidden">
                                      <div className="flex border-b border-border bg-muted/30">
                                        {(['explanation', 'js', 'python'] as const).map(tab => (
                                          <button
                                            key={tab}
                                            onClick={(e) => { e.stopPropagation(); setActiveTab(tab); }}
                                            className={`px-4 py-3 text-sm font-medium capitalize transition-colors border-b-2 ${activeTab === tab ? 'border-accent text-foreground bg-background' : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                                          >
                                            {tab === 'js' ? 'JavaScript' : tab}
                                          </button>
                                        ))}
                                      </div>
                                      <div className="p-6 max-h-[500px] overflow-y-auto">
                                        {activeTab === 'explanation' && dsaSolutions[qId].explanation}
                                        {activeTab === 'js' && (
                                          <ShikiCode code={dsaSolutions[qId].js} lang="javascript" />
                                        )}
                                        {activeTab === 'python' && (
                                          <ShikiCode code={dsaSolutions[qId].python} lang="python" />
                                        )}
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="text-center py-8 text-muted-foreground flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/20">
                                      <FileCode2 className="w-8 h-8 mb-3 text-muted-foreground/50" />
                                      <p>Solution for <strong className="text-foreground">{q.q}</strong> coming soon!</p>
                                      <p className="text-sm mt-1">Check out <strong className="text-foreground">Two Sum</strong> or <strong className="text-foreground">Valid Anagram</strong> for an example.</p>
                                    </div>
                                  )}
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
        {Object.keys(questionsByPattern).length === 0 && (
          <div className="text-center py-12 text-muted-foreground flex flex-col items-center">
            <p>No questions found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ShikiCode({ code, lang }: { code: string; lang: string }) {
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    let active = true;
    highlightCode(code, lang).then(res => {
      if (active) setHtml(res);
    });
    return () => { active = false; };
  }, [code, lang]);

  if (!html) return <div className="animate-pulse bg-[#1e1e1e] h-32 rounded-lg border border-border" />;

  return (
    <div 
      className="[&_pre]:p-4 [&_pre]:m-0 [&_pre]:rounded-lg [&_pre]:overflow-x-auto text-sm font-mono border border-border bg-[#1e1e1e] shadow-sm"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
