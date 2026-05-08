# Free Stock Images from Unsplash - Implementation Guide

This guide contains direct download links and instructions for adding free images from Unsplash to your project pages. All images are free to use with attribution.

## Setup Instructions

1. Download each image using the provided link
2. Save it to `/src/assets/` with the suggested filename
3. Import the image in the corresponding component file
4. Replace the commented image import with the imported variable

---

## BOOKS PAGE (Books.tsx)

### Book 1: "The Intelligent Investor"
**Project Use:** Professional book cover
**Filename:** `intelligent-investor.jpg`
**Download Link:** https://images.unsplash.com/photo-1771778403262-c76572576352?w=800
**Author:** Nenad Kaevik

**Steps:**
1. Download the image
2. Add to `/src/assets/intelligent-investor.jpg`
3. In `Books.tsx`, add this import at the top:
```typescript
import intelligentInvestorImg from '@/assets/intelligent-investor.jpg';
```

4. Update the bookItems array:
```typescript
{
  id: 1,
  title: "The Intelligent Investor",
  description: "Essential guide to value investing and long-term wealth building strategies",
  image: intelligentInvestorImg
}
```

---

### Book 2: "Team Lead Succeed"
**Project Use:** Leadership book
**Filename:** `team-lead-succeed.jpg`
**Download Link:** https://images.unsplash.com/photo-1645733794256-3e933d03cd1d?w=800
**Author:** Nick Fewings

**Steps:**
1. Download the image
2. Add to `/src/assets/team-lead-succeed.jpg`
3. In `Books.tsx`, add this import:
```typescript
import teamLeadSucceedImg from '@/assets/team-lead-succeed.jpg';
```

4. Update the bookItems array for the second book with this image

---

## PRESSROOM PAGE (PressRoom.tsx)

### Image 1: "Microphones at Podium"
**Project Use:** Press conference/media coverage
**Filename:** `press-mic-setup.jpg`
**Download Link:** https://plus.unsplash.com/premium_photo-1689701711439-e54f039f8d97?w=800
**Author:** Planet Volumes

**Steps:**
1. Download the image
2. Add to `/src/assets/press-mic-setup.jpg`
3. In `PressRoom.tsx`, add this import:
```typescript
import pressMicImg from '@/assets/press-mic-setup.jpg';
```

4. Update first pressItem: `image: pressMicImg`

---

### Image 2: "Professional Headset Interview"
**Project Use:** Media interview/press
**Filename:** `press-headset.jpg`
**Download Link:** https://images.unsplash.com/photo-1557804506-e969d7b32a4b?w=800
**Author:** Austin Distel

**Steps:**
1. Download the image
2. Add to `/src/assets/press-headset.jpg`
3. In `PressRoom.tsx`, add this import:
```typescript
import pressHeadsetImg from '@/assets/press-headset.jpg';
```

4. Update second pressItem: `image: pressHeadsetImg`

---

### Image 3: "Man Speaks at Podium"
**Project Use:** Speaking engagement/press announcement
**Filename:** `press-podium.jpg`
**Download Link:** https://images.unsplash.com/photo-1771340590060-be598dfb81bd?w=800
**Author:** Olek Buzunov

**Steps:**
1. Download the image
2. Add to `/src/assets/press-podium.jpg`
3. In `PressRoom.tsx`, add this import:
```typescript
import pressPodiumImg from '@/assets/press-podium.jpg';
```

4. Update third pressItem: `image: pressPodiumImg`

---

### Image 4: "Cameraman at Event"
**Project Use:** Media coverage/broadcasting
**Filename:** `press-cameraman.jpg`
**Download Link:** https://images.unsplash.com/photo-1766224242540-836020f0c64e?w=800
**Author:** Annie Spratt

**Steps:**
1. Download the image
2. Add to `/src/assets/press-cameraman.jpg`
3. In `PressRoom.tsx`, add this import:
```typescript
import pressCameramanImg from '@/assets/press-cameraman.jpg';
```

4. Update fourth pressItem: `image: pressCameramanImg`

---

### Image 5: "White House Briefing Room"
**Project Use:** Official press briefing
**Filename:** `press-briefing.jpg`
**Download Link:** https://images.unsplash.com/photo-1742413628282-b8b3ff1b7557?w=800
**Author:** Nils Huenerfeld

**Steps:**
1. Download the image
2. Add to `/src/assets/press-briefing.jpg`
3. In `PressRoom.tsx`, add this import:
```typescript
import pressBriefingImg from '@/assets/press-briefing.jpg';
```

4. Update fifth pressItem: `image: pressBriefingImg`

---

### Image 6: "Woman at Desk with Camera"
**Project Use:** Media recording/press interview
**Filename:** `press-recording.jpg`
**Download Link:** https://plus.unsplash.com/premium_photo-1688753653749-8c311b6db88f?w=800
**Author:** JSB Co.

**Steps:**
1. Download the image
2. Add to `/src/assets/press-recording.jpg`
3. In `PressRoom.tsx`, add this import:
```typescript
import pressRecordingImg from '@/assets/press-recording.jpg';
```

4. Update sixth pressItem: `image: pressRecordingImg`

---

## GALLERY PAGE (Gallery.tsx)

### Images 1-3: Professional Business Portraits
**Use:** Gallery showcase of professional people
**Filenames:** `gallery-portrait1.jpg`, `gallery-portrait2.jpg`, `gallery-portrait3.jpg`

**Download Links:**
1. https://images.unsplash.com/photo-1758599543154-76ec1c4257df?w=800 (Man with glasses)
2. https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?w=800 (Woman in maroon)
3. https://images.unsplash.com/photo-1769636930047-4478f12cf430?w=800 (Man in black sweatshirt)

**Author:** Various

### Images 4-6: Business Team Scenarios
**Use:** Team collaboration and professional settings
**Filenames:** `gallery-team1.jpg`, `gallery-team2.jpg`, `gallery-team3.jpg`

**Download Links:**
1. https://images.unsplash.com/photo-1629507313712-f21468afdf2e?w=800 (Professional woman)
2. https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=800 (Person in grey)
3. https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=800 (Woman in blue)

---

## SHOP PAGE (Shop.tsx)

### Course/Product Images
**Use:** REUSE sales-mastery.jpg from your existing assets**
(Confirmed: Your project already has this image)

For additional shop items, use these professional/business images:

**Image 1: Business Workspace**
**Filename:** `shop-course1.jpg`
**Download Link:** https://images.unsplash.com/photo-1661558807952-1d057a44f869?w=800

**Image 2: Professional Setup**
**Filename:** `shop-course2.jpg`
**Download Link:** https://images.unsplash.com/photo-1676282824850-ba7df84c3b67?w=800

---

## VIDEOS PAGE (Videos.tsx)

### Video Thumbnail Images
**Use:** Professional speaking/presentation backgrounds

**Image 1: Speaking/Presentation**
**Filename:** `video-ted-talk.jpg`
**Download Link:** https://images.unsplash.com/photo-1709377583121-576ad11b3849?w=800

**Image 2: Woman Speaking**
**Filename:** `video-presentation.jpg`
**Download Link:** https://images.unsplash.com/photo-1677937093503-42b5a3821964?w=800

**Image 3: Microphone/Speaking**
**Filename:** `video-speaking.jpg`
**Download Link:** https://images.unsplash.com/photo-1637065463674-4595b7f32adc?w=800

**Image 4: Camera Setup**
**Filename:** `video-filming.jpg`
**Download Link:** https://images.unsplash.com/photo-1694751512865-d7a603bbf54b?w=800

---

## QUICK IMPLEMENTATION CHECKLIST

- [ ] Create `/src/assets/` folder (if not exists)
- [ ] Download all images using the provided links
- [ ] Save images with suggested filenames
- [ ] Import images in each component file
- [ ] Update data arrays with image variables
- [ ] Test responsive image display
- [ ] Verify images load correctly on mobile/desktop

---

## Attribution Note

All images are from Unsplash (https://unsplash.com) and are free to use.
- The photographers retain copyright but allow free use
- Attribution appreciated but not required
- See individual photographer pages for more work

---

## Image Specifications

- **Recommended Format:** JPG (already compressed)
- **Optimal Size for Web:** 800px width (scales to device size)
- **Aspect Ratio:** Varies (CSS handles with aspect-ratio class)
- **File Size:** Most images 200-500KB (download optimized)

---

## Need Alternative Images?

If you'd like different images, you can search Unsplash directly:
- Books: Search "business book" or "professional books"
- Press: Search "media press conference" or "microphone"
- Gallery: Search "business portrait" or "professional people"
- Shop: Search "business course" or "online learning"
- Videos: Search "video recording" or "speaking presentation"

All follow the same free-to-use license!
